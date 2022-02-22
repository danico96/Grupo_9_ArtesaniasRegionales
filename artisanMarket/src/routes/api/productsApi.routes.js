const express = require("express");
const router = express.Router();
const { apiProducts} = require("../../controller");

//Rutas
router.get('/', apiProducts.getProducts); /* GET users list. */

router.get('/:id', apiProducts.detailProduct); /* GET user detail page. */

// Acá exportamos el resultado
module.exports = router;
