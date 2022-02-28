const express = require('express');
const router = express.Router();
const {multerProduct, productsValidation, errorsProduct, errorsEditProduct, validateImage} = require('../middlewares')

const { products } = require('../controller')

//Rutas
router.get('/', products.indexProducts); /* GET products list. */

router.get('/productCart', products.productCart); /* GET product cart page. */

router.get('/productDetail/:id', products.detailProduct); /* GET product detail page. */

router.get('/productCreate', products.createProduct); /* GET product create page. */
router.post('/productCreate', multerProduct.single('image'), productsValidation, errorsProduct, validateImage, products.storeProduct);

router.get('/productEdit/:id', products.editProduct); /* GET product edit page. */
router.put('/productEdit/:id', multerProduct.single('image'), productsValidation, errorsEditProduct, validateImage, products.updateProduct);

router.delete('/:id', products.deleteProduct); /* Delete one product*/

router.get('/search', products.searchProduct); /* Search a product */

//Acá exportamos el resultado
module.exports = router;