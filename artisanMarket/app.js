const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, './src/public');
const homePath = path.resolve(__dirname, './src/views/index.html');
const CartPath = path.resolve(__dirname, './src/views/productCart.html');
const loginPath = path.resolve(__dirname, './src/views/login.html')
const registerPath = path.resolve(__dirname, './src/views/register.html')

app.use(express.static(publicPath));

app.get('/', function(req, res) {
    res.sendFile(homePath);
})
app.get('/productCart', function(req, res) {
    res.sendFile(CartPath);
})
app.get('/login', (req, res) => {
    res.sendFile(loginPath);
})

app.get('/register', (req, res) => {
    res.sendFile(registerPath);
})

app.listen(port, () => console.log(`Server is running in port ${port}`));