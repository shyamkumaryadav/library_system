import { ipcMain } from 'electron';
import { Book, User } from './models';

ipcMain.handle('db:getUsers', () => {
  return User.findAll();
});

ipcMain.handle('db:getBooks', () => {
  return Book.findAll();
});

ipcMain.handle('db:addBook', (_event, args) => {
  return Book.create(args);
});

ipcMain.handle('db:deleteBook', (_event, args) => {
  return Book.destroy({
    where: {
      uid: args,
    },
  });
});

ipcMain.handle('db:updateBook', (_event, data, uid) => {
  return Book.update(data, {
    where: {
      uid,
    },
  });
});
