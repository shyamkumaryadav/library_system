import { ipcMain } from 'electron';
import { BOOK, USER } from './models';

ipcMain.handle('db:getUsers', () => {
  return USER.find();
});

ipcMain.handle('db:getBooks', () => {
  return BOOK.find();
});

ipcMain.handle('db:addBook', (_event, args) => {
  return BOOK.create(args);
});

ipcMain.handle('db:deleteBook', (_event, uid) => {
  return BOOK.delete({
    uid,
  });
});

ipcMain.handle('db:updateBook', (_event, data, uid) => {
  return BOOK.update(
    {
      uid,
    },
    data
  );
});
