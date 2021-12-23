const express = require('express');
const route = express.Router();

//Rutas
route.use('/', require('./users.routes')); //rutas de los ususarios
route.use('/users', require('./users.routes')); //rutas de los ususarios
route.use('/products', require('./products.routes')); //rutas para los productos

// Acá exportamos el resultado
module.exports = route;