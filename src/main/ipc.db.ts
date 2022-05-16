import { ipcMain } from 'electron';
import { User } from './models';

ipcMain.handle('db:getUser', () => {
  return User.findAll();
});
