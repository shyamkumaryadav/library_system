import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize,
} from 'sequelize';

class Book extends Model<InferAttributes<Book>, InferCreationAttributes<Book>> {
  declare uid: CreationOptional<string>;

  declare name: string;

  declare author: string | null;

  declare publisher: string | null;

  declare genre: string | null;

  declare price: number | null;

  static initModel(sequelize: Sequelize): typeof Book {
    Book.init(
      {
        uid: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING,
        },
        publisher: {
          type: DataTypes.STRING,
        },
        genre: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.FLOAT,
        },
      },
      {
        sequelize,
        createdAt: false,
        updatedAt: false,
      }
    );

    return Book;
  }
}

export default Book;
