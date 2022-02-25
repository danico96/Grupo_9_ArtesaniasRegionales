const express = require("express");
const router = express.Router();
const {multerUser, registerValidation, errors, validateImage, loginValidation, errorsLogin} = require('../middlewares');

const {users, products} = require("../controller");

//Rutas
router.get('/', users.indexUsers); /* GET users list. */

router.get("/login", users.loginUser); /* GET login page. */
router.post("/login", loginValidation, errorsLogin, users.loginProcess);
router.get('/logout', users.logout);

router.get("/register", users.registerUser); /* GET register page. */
router.post("/registerUser", multerUser.single('image'), registerValidation, errors, validateImage, users.storeUser);

router.get('/userDetail/:id', users.detailUser); /* GET user detail page. */

router.get('/userEdit/:id', users.editUser); /* GET user edit page. */
router.put('/userEdit/:id', multerUser.single('image'), users.updateUser);

router.delete('/:id', users.deleteUser); /* Delete one user*/

// Acá exportamos el resultado
module.exports = router;
