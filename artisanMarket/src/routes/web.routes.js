const express = require("express");
const router = express.Router();
const path = require("path");

const { web } = require("../controller");

router.get("/", web.homeUser); /* GET home page. */

module.exports = router;

