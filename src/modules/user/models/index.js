module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define(
    "users",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: true,
        default: null,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
        default: null,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        default: null,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: null,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        default: null,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return userModel;
};
