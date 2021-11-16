const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');
const productController = require('../controller/productController');


// Acá definimos las rutas
router.get('/', controller.home); /* GET home page. */

router.get('/login', controller.login); /* GET login page. */

router.get('/productCart', controller.productCart); /* GET product cart page. */

router.get('/productDetail', controller.productDetail); /* GET product detail page. */

router.get('/register', controller.register); /* GET register page. */

router.get('/productEdit', productController.edit); /* GET product edit page. */

router.get('/products', productController.index); /* GET products list. */

// Acá exportamos el resultado
module.exports = router;