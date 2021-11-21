const modelUsers = require('../data/modelUsers');
const usersDB = require('../data/users.json');

const controller = {
    home: (req, res) => {
        res.render('./web/index');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req, res) => {
        res.render('./users/register');
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
    store: (req, res) => {
        let newUser = {
            "id": usersDB.length + 1,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password,
            "category": req.body.category
        }
        modelUsers.createUser(newUser)
        
        res.redirect("/");
    }
}

module.exports = controller;