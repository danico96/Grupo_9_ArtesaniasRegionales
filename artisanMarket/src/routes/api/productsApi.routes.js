const express = require("express");
const router = express.Router();
const { apiProducts} = require("../../controller");

//Rutas
router.get('/', apiProducts.getProducts); /* GET products list. */

router.get('/last', apiProducts.lastProduct); /* GET last product detail page. */

router.get('/:id', apiProducts.detailProduct); /* GET product detail page. */

// Acá exportamos el resultado
module.exports = router;
