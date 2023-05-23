module.exports = (sequelize, DataTypes) => {
  const productsModel = sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return productsModel;
};
