import { app } from 'electron';
import { DataSource } from 'typeorm';
import * as path from 'path';
import { sqliteLog, TypeORMLogger } from './logger';
import { BOOK, ISSUE, USER } from './models';

export const dbPath = path.join(app.getPath('userData'), 'db.sqlite3');

sqliteLog.log('dbPath', dbPath);

const db = new DataSource({
  type: 'sqlite',
  database: dbPath,
  entities: [BOOK, USER, ISSUE],
  synchronize: true,
  logging: true,
  logger: new TypeORMLogger(),
});

export default db;
