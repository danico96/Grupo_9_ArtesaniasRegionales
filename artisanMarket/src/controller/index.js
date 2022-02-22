const web = require("./web.controller");
const users = require("./users.controller");
const products = require("./product.controller");
const apiUser = require('./api/users.controller');
const apiProducts = require('./api/products.controller');

module.exports = {
    web,
    users,
    products,
    apiUser,
    apiProducts
};