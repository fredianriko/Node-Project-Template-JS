// import express middleware
const express = require("express");
const router = express.Router();

// imports all modules
const userModule = require("../user");
const productModule = require("../product");

// add new modules to this array
const modules = [userModule, productModule];

// apply express middleware to each of route in the modules
for (const module of modules) {
  router.use(module);
}

module.exports = modules;
