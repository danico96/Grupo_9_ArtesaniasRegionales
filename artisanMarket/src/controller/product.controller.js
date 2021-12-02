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
    indexProducts: (req, res) => {
        res.render('./products/products', { products: productsmodel.getProducts() });
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
    detailProduct: (req, res) => {
        let productId = req.params.id;
        let product = productsmodel.getProducts().find(item => item.id == productId)

        res.render('./products/productDetail', { product });
    },
    createProduct: (req, res) => {
        res.render('./products/productCreate');
    },
    storeProduct: (req, res) => {
        let newProduct = {
            "id": newId(),
            "name": req.body.productName,
            "description": req.body.description,
            "image": req.file.filename,
            "category": req.body.region,
            "colors": req.body.colors,
            "price": req.body.price
        }
        productsmodel.createProduct(newProduct)

        res.redirect("/products");
    },
    editProduct: (req, res) => {
        let productId = req.params.id;
        let product = productsmodel.getProducts().find(item => item.id == productId);
        res.render('./products/productEdit', { product });
    },
    updateProduct: (req, res) => {
        let productId = req.params.id;

        let productEdit = {
            "id": parseInt(productId),
            "name": req.body.productName,
            "description": req.body.description,
            "image": req.file.filename,
            "category": req.body.region,
            "colors": req.body.colors,
            "price": req.body.price
        }
        productsmodel.updateProduct(productId, productEdit);

        res.redirect("/products");
    },
    deleteProduct: (req, res) => {
        console.log('Aquí está');
        res.send('Entrando');
        // let productId = req.params.id;
        // productsmodel.deleteProduct(productId);

        // res.redirect('/products');
    }
};

module.exports = productController