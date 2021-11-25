const { usermodel, productsmodel } = require('../data');

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
        const create = productsmodel.createProduct;
        res.render('./products/productCreate');
    },
    editProduct: (req, res) => {
        let productoEditar = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('./products/productEdit', { product: productoEditar });
    },
    deleteProduct: (req, res) => {
        let productosRestantes = products.filter(product => {
            return product.id != req.params.id;
        })

        let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), jsonDeProductos);

        res.redirect('/products');
    }
}

module.exports = controller;