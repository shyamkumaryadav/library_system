import log from 'electron-log';
import { resolveMainPath } from './util';

log.transports.file.resolvePath = () => resolveMainPath('main.log');

export const mainLog = log.scope('main');
export const sqliteLog = log.scope('sqlite');
