const express = require("express");
const router = express.Router();
const path = require("path");
const { users } = require("../controller");

//multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/users"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

const upload = multer({ storage });

//Rutas
router.get("/", users.homeUser); /* GET home page. */
router.get("/login", users.loginUser); /* GET login page. */
router.post("/login", users.loginProcess);
router.get("/register", users.registerUser); /* GET register page. */
router.post("/registerUser", upload.single('imgPerfil'), users.storeUser);

// Acá exportamos el resultado
module.exports = router;
