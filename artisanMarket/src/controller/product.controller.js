const { products } = require('.');
const { productsmodel } = require('../model');

const newId = () => {
    let ultimo = 0;
    this.getProducts().forEach(item => {
        if (item.id > ultimo) {
            ultimo = item.id;
        }
    });
    return ultimo + 1;
};

const productController = {
    homeUser: async (req, res) => {
        try {
            const products = await productsmodel.getProducts();
            res.render("./web/index", { products });
        } catch (error) {
            console.log(error.message);
        }
      },    

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
            let product = await productsmodel.getOneProduct(productId)
    
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
        console.log('entro');
        // try {
        //     console.log("está llegando");
        //     let newProduct = {
        //         "id": newId(),
        //         "name": req.body.productName,
        //         "description": req.body.description,
        //         "picture": req.file.filename,
        //         "regions_id": req.body.region,
        //         "quantity": req.body.quantity, //falta cambiar en formulario
        //         "price": req.body.price
        //     }
        //     await productsmodel.createProduct(newProduct)
    
        //     res.redirect("/products");    
        // } catch (error) {
        //     console.log(error.message);
        // }
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
                "id": parseInt(productId),
                "name": req.body.productName,
                "description": req.body.description,
                "picture": req.file.filename,
                "regions_id": req.body.region,
                "quantity": req.body.quantity, //falta cambiar en formulario
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