const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './public');
const homePath = path.resolve(__dirname, './views/index.html');
const CartPath = path.resolve(__dirname, './views/productCart.html');

app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(homePath);
})
app.get('/', function(req, res) {
    res.sendFile(CartPath);
})
app.listen(port, () => console.log(`Server is running in port ${port}`));