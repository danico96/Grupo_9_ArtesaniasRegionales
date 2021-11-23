const { usermodel } = require('../data');

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
    store: (req, res) => {
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