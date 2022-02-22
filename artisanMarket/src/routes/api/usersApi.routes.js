const express = require("express");
const router = express.Router();
const { apiUser} = require("../../controller");

//Rutas
router.get('/', apiUser.Users); /* GET users list. */

router.get('/:id', apiUser.detailUser); /* GET user detail page. */

// Acá exportamos el resultado
module.exports = router;
