const express = require('express');
const router = express.Router();
const path = require('path');
const createValidation = require('../middlewares/products/createValidation');

const { products } = require('../controller')

//multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/products"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const uploadImg = multer({ storage: storage });

//Rutas
router.get('/', products.indexProducts); /* GET products list. */

router.get('/productCart', products.productCart); /* GET product cart page. */

router.get('/productDetail/:id', products.detailProduct); /* GET product detail page. */

router.get('/productCreate', products.createProduct); /* GET product create page. */
router.post('/productCreate', uploadImg.single('image'), createValidation, products.storeProduct);

router.get('/productEdit/:id', products.editProduct); /* GET product edit page. */
router.put('/productEdit/:id', uploadImg.single('image'), products.updateProduct);

router.delete('/:id', products.deleteProduct); /* Delete one product*/

//Acá exportamos el resultado
module.exports = router;