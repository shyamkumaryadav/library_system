import { InvokeChannels, ReceiveChannels, SendChannels } from 'main/preload';
import log from 'electron-log';

declare global {
  interface Window {
    electron: {
      log: log.LogFunctions;
      send: (channel: SendChannels, args?: unknown[]) => void;
      receive: (
        channel: ReceiveChannels,
        func: (...args: unknown[]) => void
      ) => () => Electron.IpcRenderer;
      invoke: <T, U>(channel: InvokeChannels, args: T[]) => Promise<U>;
    };
  }
}

export {};
