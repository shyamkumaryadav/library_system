import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize,
} from 'sequelize';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare phoneNumber: string;

  static initModel(sequelize: Sequelize): typeof User {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: DataTypes.STRING(14),
          allowNull: false,
        },
      },
      {
        sequelize,
        createdAt: false,
        updatedAt: false,
      }
    );

    return User;
  }
}

export default User;
