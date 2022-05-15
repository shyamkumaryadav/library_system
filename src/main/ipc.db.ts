import { ipcMain } from 'electron';
import { mainLog } from './logger';
import { User } from './models';

ipcMain.on('db:getUser', (event) => {
  User.findAll()
    .then((res) => {
      return event.reply('db:getUser', res);
    })
    .catch(mainLog.error);
});
