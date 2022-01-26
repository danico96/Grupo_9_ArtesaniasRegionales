const express = require("express");
const router = express.Router();
const path = require("path");

const { users,products } = require("../controller");

//multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now()+ path.extname(file.originalname));      
    }
  })
   
const upload= multer({ storage })

//Rutas
router.get('/users', users.indexUsers); /* GET products list. */
router.get("/", products.homeUser); /* GET home page. */
router.get("/login", users.loginUser); /* GET login page. */
router.post("/login", users.loginProcess);
router.get("/register", users.registerUser); /* GET register page. */
router.post("/registerUser", upload.single(), users.storeUser);
router.get('/logout', users.logout);
router.get('/userDetail/:id', users.detailUser); /* GET product detail page. */
router.get('/userEdit/:id', users.editUser); /* GET product edit page. */
router.put('/userEdit/:id', upload.single('imgPerfil'), users.updateUser);

router.delete('/:id', products.deleteProduct); /* Delete one product*/ 

// Acá exportamos el resultado
module.exports = router;
