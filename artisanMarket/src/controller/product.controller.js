const { productsmodel } = require('../model');
const { validationResult } = require('express-validator');

const productController = {
    indexProducts: async (req, res) => {
        try {
            const products = await productsmodel.getProducts();
            res.render("./products/products", { products });
        } catch (error) {
            console.log(error.message);
        }
    },

    productCart: async (req, res) => {
        try {
            res.render('./products/productCart');
        } catch (error) {
            console.log(error);
        }
    },

    detailProduct: async (req, res) => {
        try {
            let productId = req.params.id;
            let product = await productsmodel.getOneProduct(productId);

            res.render('./products/productDetail', { product });
        } catch (error) {
            console.log(error);
        }
    },

    createProduct: async (req, res) => {
        try {
            res.render('./products/productCreate');
        } catch (error) {
            console.log(error.message);
        }
    },

    storeProduct: async (req, res) => {
        try {
                let newProduct = {
                    "name": req.body.productName,
                    "description": req.body.description,
                    "picture": req.file.filename,
                    "regions_id": req.body.region,
                    "quantity": req.body.quantity,
                    "price": req.body.price
                }
                await productsmodel.createProduct(newProduct)

                res.redirect("/products");
        } catch (error) {
            console.log(error.message);
        }
    },

    editProduct: async (req, res) => {
        try {
            let productId = req.params.id;
            let product = await productsmodel.getOneProduct(productId);
            res.render('./products/productEdit', { product });
        } catch (error) {
            console.log(error.message);
        }
    },

    updateProduct: async (req, res) => {
        try {
            let productId = req.params.id;

            let productEdit = {
                "name": req.body.productName,
                "description": req.body.description,
                "picture": req.file.filename,
                "regions_id": req.body.region,
                "quantity": req.body.quantity,
                "price": req.body.price
            };

            await productsmodel.updateProduct(productId, productEdit);

            res.redirect("/products");
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteProduct: async (req, res) => {
        try {
            let productId = req.params.id;
            await productsmodel.deleteProduct(productId);
            res.redirect("/products");
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = productController