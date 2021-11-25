const { usermodel, productsmodel } = require('../data');
const productsDB = require('../data/products.json')

const newId = () => {
    let ultimo = 0;
    this.getProducts().forEach(item => {
        if (item.id > ultimo) {
            ultimo = item.id;
        }
    });
    return ultimo + 1;
};

const controller = {
    homeUser: (req, res) => {
        res.render('./web/index', { products: productsmodel.getProducts() });
    },
    loginUser: (req, res) => {
        res.render('./users/login');
    },
    registerUser: (req, res) => {
        res.render('./users/register');
    },
    storeUser: (req, res) => {
        let newUser = {
            "id": usersDB.length + 1,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password,
            "category": req.body.category
        }
        usermodel.createUser(newUser)

        res.redirect("/");
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
    indexProducts: (req, res) => {
        res.render('./products/products', { products: productsmodel.getProducts() });
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
            "id": productsDB.length + 1,
            "name": req.body.productName,
            "description": req.body.description,
            "image": req.body.img,
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
            "id": productId,
            "name": req.body.productName,
            "description": req.body.description,
            "image": req.fle.img,
            "category": req.body.region,
            "colors": req.body.colors,
            "price": req.body.price
        }
        productsmodel.updateProduct(productId, productEdit);

        res.redirect("/products");
    },
    deleteProduct: (req, res) => {
        let productId = req.params.id;
        productsmodel.deleteProduct(productId);

        res.redirect('/products');
    }
}

module.exports = controller;