const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
});

/* GET product cart page. */
router.get('/productCart', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
});

/* GET product detail page. */
router.get('/productDetail', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
});

/* GET register page. */
router.get('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/register.html'))
});

module.exports = router;