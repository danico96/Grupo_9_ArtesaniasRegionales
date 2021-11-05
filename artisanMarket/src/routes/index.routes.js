const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');


// Acá definimos las rutas
router.get('/', controller.home); /* GET home page. */

router.get('/login', controller.login); /* GET login page. */

router.get('/productCart', controller.productCart); /* GET product cart page. */

router.get('/productDetail', controller.productDetail); /* GET product detail page. */

router.get('/register', controller.register); /* GET register page. */

router.get('/productEdit', controller.productEdit); /* GET product edit page. */

// Acá exportamos el resultado
module.exports = router;