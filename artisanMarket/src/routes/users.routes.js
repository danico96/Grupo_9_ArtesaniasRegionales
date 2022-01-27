const express = require("express");
const router = express.Router();
const path = require("path");

const { users, products } = require("../controller");

//multer
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../public/images/users'));
  },
  filename: function (req, file, cb) {
    cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
  }
})

const uploadImg = multer({ storage: storage });

//Rutas
router.get('/', users.indexUsers); /* GET users list. */

router.get("/login", users.loginUser); /* GET login page. */
router.post("/login", users.loginProcess);
router.get('/logout', users.logout);

router.get("/register", users.registerUser); /* GET register page. */
router.post("/registerUser", uploadImg.single('image'), users.storeUser);

router.get('/userDetail/:id', users.detailUser); /* GET user detail page. */

router.get('/userEdit/:id', users.editUser); /* GET user edit page. */
router.put('/userEdit/:id', uploadImg.single('image'), users.updateUser);

router.delete('/:id', users.deleteUser); /* Delete one user*/

// Acá exportamos el resultado
module.exports = router;
