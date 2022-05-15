import { InvokeChannels, ReceiveChannels, SendChannels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      send: (channel: SendChannels, args?: unknown[]) => void;
      receive: (
        channel: ReceiveChannels,
        func: (...args: unknown[]) => void
      ) => () => Electron.IpcRenderer;
      invoke: (channel: InvokeChannels, args: unknown[]) => Promise<unknown>;
    };
  }
}

export {};
