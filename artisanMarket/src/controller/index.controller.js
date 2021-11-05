const path = require('path');

const controller = {
    home: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/login'));
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/register'));
    },
    productCart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/productCart'));
    },
    productDetail: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/productDetail'));
    }
}

module.exports = controller;