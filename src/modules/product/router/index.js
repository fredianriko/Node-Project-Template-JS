const productController = require('../controller')
const router = require('express').Router()


router.get('/product', productController)

module.exports = router