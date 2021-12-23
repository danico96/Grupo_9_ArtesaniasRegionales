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
router.get("/", products.homeUser); /* GET home page. */
router.get("/login", users.loginUser); /* GET login page. */
router.post("/login", users.loginProcess);
router.get("/register", users.registerUser); /* GET register page. */
router.post("/registerUser", upload.single(), users.storeUser);
router.get('/logout', users.logout);

// Acá exportamos el resultado
module.exports = router;
