const {userService, userServiceById } = require('../services')

const userController = async (req,res,next) => {
    console.log('User controller');
    const userServices = await userService()
    console.log(userServices)
    res.send(userServices).status(200)
} 

const userControllerById = async (req,res) => {
    const getById = await userServiceById()
    console.log('get user by id')
    res.send(getById).status(200)
} 

module.exports = {userController, userControllerById}