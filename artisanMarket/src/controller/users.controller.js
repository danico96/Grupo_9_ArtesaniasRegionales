const { usermodel, productsmodel } = require('../data');

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
        function imgName() {
            if (!req.file) {
                return "default-image.png";
            } else {
                return req.file.filename;
            }
        };

        const newProduct = {
            id: newId(),
            ...req.body,
            image: imgName()
        };
        productsmodel.createProduct(newProduct);
        res.redirect('/');
    },
    editProduct: (req, res) => {
        let productoEditar = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('./products/productEdit', { product: productoEditar });
    },
    deleteProduct: (req, res) => {
        let productId = req.params.id;
        productsmodel.deleteProduct(productId);

        res.redirect('/products');
    }
}

module.exports = controller;