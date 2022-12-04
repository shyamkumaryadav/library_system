import { ipcMain } from 'electron';
import db from './db';
import { BOOK, USER } from './models';

ipcMain.handle('db:getUsers', () => {
  return db.manager.find(USER, {
    order: {
      name: 'ASC',
    },
  });
});

ipcMain.handle('db:getBooks', () => {
  return db.manager.find(BOOK, {
    order: {
      name: 'ASC',
    },
  });
});

ipcMain.handle('db:addBook', (_event, args: BOOK) => {
  return db.manager.create(BOOK, args);
});

ipcMain.handle('db:deleteBook', async (_event, id: BOOK['id']) => {
  const row = db.manager.findOne(BOOK, {
    where: {
      id,
    },
  });
  if (row) {
    await db.manager.remove(row);
    return row;
  }
  return false;
});

ipcMain.handle('db:updateBook', async (_event, data: BOOK, id: BOOK['id']) => {
  const row = db.manager.findOne(BOOK, {
    where: {
      id,
    },
  });
  if (row) {
    await db.manager.save({ ...row, data });
    return row;
  }
  return false;
});
