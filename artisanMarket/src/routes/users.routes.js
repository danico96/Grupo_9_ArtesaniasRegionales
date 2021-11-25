const express = require("express");
const router = express.Router();
const path = require("path");
const { users } = require('../controller')

//multer
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/images"));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({ storage: storage });

//Rutas
router.get('/', users.homeUser); /* GET home page. */

router.get('/login', users.loginUser); /* GET login page. */

router.get('/register', users.registerUser); /* GET register page. */
router.post('/registerUser', users.storeUser);

router.get('/productCart', users.productCart); /* GET product cart page. */

router.get('/products', users.indexProducts); /* GET products list. */

router.get('/productDetail/:id', users.detailProduct); /* GET product detail page. */

router.get('/productCreate', users.createProduct); /* GET product create page. */
<<<<<<< HEAD
router.post('/', upload.single('image'), users.storeProduct);
=======
router.post('/productCreate', upload.single(), users.storeProduct);
>>>>>>> 29a0f5c42c2a70eab91467db150f1325b7f6a204

router.get('/productEdit', users.editProduct); /* GET product edit page. */

router.delete('/:id', users.deleteProduct); /* Delete one product*/ 


// Acá exportamos el resultado
module.exports = router;