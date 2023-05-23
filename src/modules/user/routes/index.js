const userRoute = require("express").Router();
const { userController, userControllerById } = require("../controller");

//add new routes for user use case here
userRoute.get("/user", userController);
userRoute.get("/userById", userControllerById);

// export
module.exports = userRoute;
