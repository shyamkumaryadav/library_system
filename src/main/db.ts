import { Sequelize } from 'sequelize';
import sqlite from 'sqlite3';
import { sqliteLog } from './logger';
import { resolveMainPath } from './util';

const DATABASE_FILE_NAME = 'db.sqlite3';

const db = new Sequelize({
  dialect: 'sqlite',
  storage: resolveMainPath(DATABASE_FILE_NAME),
  dialectModule: sqlite,
  logging: (sql) => sqliteLog.debug(sql),
});

export default db;
