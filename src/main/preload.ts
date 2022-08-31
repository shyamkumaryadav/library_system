import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import log from 'electron-log';

export type SendChannels = 'ipc-example' | 'db:getUser';

export type ReceiveChannels = 'winChange' | 'fullScreen' | 'status';

export type InvokeChannels =
  | 'db:getUsers'
  | 'db:getBooks'
  | 'db:addBook'
  | 'db:deleteBook'
  | 'db:updateBook';

const rendererLog = log.scope('renderer');
contextBridge.exposeInMainWorld('electron', {
  log: rendererLog,
  send: (channel: SendChannels, args?: unknown[]) => {
    ipcRenderer.send(channel, args);
  },
  receive: (channel: ReceiveChannels, func: (...args: unknown[]) => void) => {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);
    return () => ipcRenderer.removeListener(channel, subscription);
  },
  invoke: (channel: InvokeChannels, args: unknown[]) => {
    return ipcRenderer.invoke(channel, ...args);
  },
});
