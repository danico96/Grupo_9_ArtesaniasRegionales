const express = require("express");
const router = express.Router();
const { apiProducts} = require("../../controller");

//Rutas
router.get('/', apiProducts.getProducts); /* GET products list. */

router.get('/:id', apiProducts.detailProduct); /* GET product detail page. */

router.get('/last', apiProducts.getLastInDb); /* GET last product page. */

// Acá exportamos el resultado
module.exports = router;
