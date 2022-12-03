import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import log from 'electron-log';
import { BOOK, USER } from './models';

export type SendEventNull = Array<null>;

interface SendEventMap {
  'ipc-example': SendEventNull;
  'db:getUser': SendEventNull;
}

interface ReceiveEventMap {
  winChange: boolean;
  fullScreen: boolean;
  status: unknown;
}

interface InvokeEvent<T, P> {
  args: T;
  return: P;
}

interface InvokeEventMap {
  'db:getUsers': InvokeEvent<[], USER[]>;
  'db:getBooks': InvokeEvent<[], { rows: BOOK[]; count: number }>;
  'db:addBook': InvokeEvent<[pk: number, data: BOOK], BOOK>;
  'db:deleteBook': InvokeEvent<[pk: number], BOOK>;
  'db:updateBook': InvokeEvent<[pk: number, obj: BOOK], BOOK>;
}

const rendererLog = log.scope('renderer');

export const api = {
  logger: rendererLog,
  send: <T extends keyof SendEventMap>(
    channel: T,
    ...args: SendEventMap[T]
  ) => {
    ipcRenderer.send(channel, args);
  },
  receive: <T extends keyof ReceiveEventMap>(
    channel: T,
    func: (args: ReceiveEventMap[T]) => void
  ) => {
    const subscription = (_event: IpcRendererEvent, ...args: any[]) =>
      func(args as ReceiveEventMap[T]);
    ipcRenderer.on(channel, subscription);
    return () => ipcRenderer.removeListener(channel, subscription);
  },
  invoke: <T extends keyof InvokeEventMap>(
    channel: T,
    ...args: InvokeEventMap[T]['args']
  ) => {
    return ipcRenderer.invoke(channel, ...args);
  },
};

contextBridge.exposeInMainWorld('electron', api);
