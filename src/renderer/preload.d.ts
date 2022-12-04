import electronAPI from 'main/preload';

declare global {
  interface Window {
    electron: typeof electronAPI;
  }
}

export {};
