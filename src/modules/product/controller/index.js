const productService = require('../services')

const productController = async (req,res) => {
    const productServices = await productService()
    res.send(productServices).status(200)
}

module.exports = productController