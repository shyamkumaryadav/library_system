/* eslint-disable class-methods-use-this */
import log from 'electron-log';
import { Logger } from 'typeorm';

export const mainLog = log.scope('main');
export const sqliteLog = log.scope('sqlite');

export class TypeORMLogger implements Logger {
  logSchemaBuild(message: string) {
    sqliteLog.log(message);
  }

  logQuery(query: string, parameters?: unknown[] | undefined) {
    sqliteLog.log(query, parameters);
  }

  logQueryError(
    error: string | Error,
    query: string,
    parameters?: unknown[] | undefined
  ) {
    sqliteLog.error(error, query, parameters);
  }

  logQuerySlow(
    time: number,
    query: string,
    parameters?: unknown[] | undefined
  ) {
    sqliteLog.log(time, query, parameters);
  }

  logMigration(message: string) {
    sqliteLog.debug(message);
  }

  log(level: 'warn' | 'info' | 'log', message: unknown) {
    sqliteLog[level](message);
  }
}
