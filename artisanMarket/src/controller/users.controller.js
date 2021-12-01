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
    }
}

module.exports = controller;