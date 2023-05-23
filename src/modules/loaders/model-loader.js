const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/database/db-env-config").development;
const models = {};
const modulesDir = path.join(__dirname, "..");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const modelFileFullPaths = fs
  .readdirSync(modulesDir)
  .filter((moduleDir) => moduleDir !== "loaders")
  .map((moduleDir) => path.join(modulesDir, moduleDir))
  .filter((moduleDir) => fs.existsSync(path.join(moduleDir, "models")))
  .map((moduleDir) => path.join(moduleDir, "models"))
  .map((modelsDir) => path.join(modelsDir, "index.js"));

modelFileFullPaths.forEach((modelFileFullPath) => {
  const model = require(path.join(modelFileFullPath))(sequelize, Sequelize.DataTypes);
  models[model.name] = model;
});

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// sync all table, becareful, this will remove all the data in the existing database

// sequelize.sync({force: true})
// .then(() => {
//   console.log('All models were synchronized successfully.');
// })
// .catch(error => {
//   console.error('An error occurred while synchronizing the models:', error);
// });

const db = {
  ...models,
  sequelize,
  Sequelize,
};

module.exports = db;
