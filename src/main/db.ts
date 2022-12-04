import { DataSource } from 'typeorm';
import { sqliteLog, TypeORMLogger } from './logger';
import { BOOK, ISSUE, USER } from './models';
import { resolveMainPath } from './util';

const dbPath = resolveMainPath('db.sqlite3');
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
