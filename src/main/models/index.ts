import type { Sequelize } from 'sequelize';
import Book from './Book';
import User from './User';
import Issue from './Issue';

export { Book, User, Issue };

export function initModels(sequelize: Sequelize) {
  Book.initModel(sequelize);
  User.initModel(sequelize);
  Issue.initModel(sequelize);

  Issue.hasOne(Book, {
    as: 'book',
    foreignKey: 'issueId',
  });
  Issue.hasOne(User, {
    as: 'user',
    foreignKey: 'issueId',
  });

  return {
    Book,
    User,
    Issue,
  };
}
