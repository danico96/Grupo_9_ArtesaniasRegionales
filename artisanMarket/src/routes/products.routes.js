const express = require('express');
const router = express.Router();
const path = require('path');

const { products } = require('../controller')

//multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({ storage: storage });

//Rutas
router.get('/', products.index); /* GET products list. */

router.get('/productDetail', products.detail); /* GET product detail page. */

router.get('/productCreate', products.create); /* GET product create page. */
router.post('/productCreate', );

router.get('/productEdit', products.edit); /* GET product edit page. */

//Acá exportamos el resultado
module.exports = router;