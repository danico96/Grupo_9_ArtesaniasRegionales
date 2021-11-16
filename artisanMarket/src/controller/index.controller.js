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
}

module.exports = controller;