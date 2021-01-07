const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const cors = require('cors');
//GET ALL PRODUCTS
router.get('/', cors(), async (req, res) => {

    try {



        const products = await Product.find();
        res.json(products);

    } catch (error) {
        res.json(error);
    }

});
//GET ALL PRODUCTS WithOut Owner Products
router.get('/withoutOwnerProducts', cors(), async (req, res) => {
    try {

        const products = await Product.find({ owner: { $ne: req.query.email } });
        res.json(products);
    } catch (error) {
        res.json(error);
    }

});


//GET Owner Products
router.get('/GetOwnerProducts', cors(), async (req, res) => {
    try {

        const products = await Product.find({ owner: req.query.email });
        res.json(products);
    } catch (error) {
        res.json(error);
    }

});
//GET Search Products
router.get('/search/:seachkey', cors(), async (req, res) => {
    try {

        const products = await Product.find({ searchKey: req.params.seachkey });
        res.json(products);
    } catch (error) {
        res.json(error);
    }

});
//INSERT PRODUCT
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
        owner: req.body.owner,
        searchKey: req.body.searchKey,
        rating: req.body.rating,
        noOfRating: req.body.noOfRating,
    });

    try {

        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.json({ message: error });

    }

});

//SPECIFIC PRODUCT
router.get('/:productId', async (req, res) => {
    try {

        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.json({ message: error });

    }
});


//DELETE PRODUCT
router.delete('/:productId', async (req, res) => {
    try {

        const removedProduct = await Product.deleteOne({
            _id: req.params.productId
        });
        res.json(removedProduct);
    } catch (error) {
        res.json({ message: error });

    }
});


//UPDATE PRODUCT
router.patch('/:productId', async (req, res) => {
    try {

        const updatedProduct = await Product.updateOne({
            _id: req.params.productId
        }, {
            $set: req.body
            //{
            //name: req.body.name,
            //price: req.body.price,
            //imgUrl: req.body.imgUrl,
            //owner: req.body.owner,
            //searchKey: req.body.searchKey,
            //rating: req.body.rating,
            //noOfRating: req.body.noOfRating,
            //}
        });
        res.json(updatedProduct);
    } catch (error) {
        res.json({ message: error });

    }
});


module.exports = router;