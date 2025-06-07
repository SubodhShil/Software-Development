const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async errors');
    res.status(200).json({ msg: 'All products (testing route)' });
}

const getAllProducts = async (req, res) => {
    console.log(req.query);
    const products = await Product.find(req.query);
    res.status(200).json({ msg: "Products route" });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}   

