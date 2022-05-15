import {
  Association,
  CreationOptional,
  DataTypes,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize,
} from 'sequelize';
import type Book from './Book';
import type User from './User';

type IssueAssociations = 'book' | 'user';

class Issue extends Model<
  InferAttributes<Issue, { omit: IssueAssociations }>,
  InferCreationAttributes<Issue, { omit: IssueAssociations }>
> {
  declare id: CreationOptional<number>;

  declare dueDate: string;

  declare remark: string | null;

  // Issue hasOne Book
  declare book?: NonAttribute<Book>;

  declare getBook: HasOneGetAssociationMixin<Book>;

  declare setBook: HasOneSetAssociationMixin<Book, string>;

  declare createBook: HasOneCreateAssociationMixin<Book>;

  // Issue hasOne User
  declare user?: NonAttribute<User>;

  declare getUser: HasOneGetAssociationMixin<User>;

  declare setUser: HasOneSetAssociationMixin<User, number>;

  declare createUser: HasOneCreateAssociationMixin<User>;

  declare static associations: {
    book: Association<Issue, Book>;
    user: Association<Issue, User>;
  };

  static initModel(sequelize: Sequelize): typeof Issue {
    Issue.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        dueDate: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        remark: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        createdAt: 'date',
        updatedAt: false,
      }
    );

    return Issue;
  }
}

export default Issue;
