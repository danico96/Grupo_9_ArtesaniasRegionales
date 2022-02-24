const userSession = require('./acceso');
const userLogged = require ("./userlogged");
const {registerValidation, errors, validateImage} = require('./users/registerValidation');
const multerUser = require('./users/multer');
const {loginValidation, errorsLogin} = require('./users/loginValidation');
const multerProduct = require('./products/multer');
const {productsValidation, errorsProduct, errorsEditProduct} = require('./products/productsValidation');

module.exports = {
    userSession,
    userLogged,
    registerValidation, 
    errors, 
    validateImage,
    multerUser,
    loginValidation,
    errorsLogin,
    multerProduct,
    productsValidation,
    errorsProduct,
    errorsEditProduct
};