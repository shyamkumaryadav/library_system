import { URL } from 'url';
import path from 'path';
import { app } from 'electron';

export const resolveHtmlPath = (htmlFileName: string) => {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    app.getPath('userData');
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
};

export const resolveMainPath = (filename: string) =>
  path.join(
    app.isPackaged
      ? app.getPath('userData')
      : path.dirname(path.dirname(__dirname)),
    filename
  );
