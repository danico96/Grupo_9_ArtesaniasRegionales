const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');
const productController = require('../controller/productController');
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =
        Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });
  
  const upload = multer({ storage: storage });
// Acá definimos las rutas
router.get('/', controller.home); /* GET home page. */

router.get('/login', controller.login); /* GET login page. */

router.get('/productCart', controller.productCart); /* GET product cart page. */

router.get('/productDetail', productController.detail); /* GET product detail page. */

router.get('/register', controller.register); /* GET register page. */

router.get('/productCreate', productController.create); /* GET product create page. */
router.post('/productCreate', );

router.get('/productEdit', productController.edit); /* GET product edit page. */

router.get('/products', productController.index); /* GET products list. */

// Acá exportamos el resultado
module.exports = router;