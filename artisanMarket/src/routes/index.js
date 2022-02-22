const express = require('express');
const route = express.Router();

//Rutas
route.use('/', require('./web.routes')); //rutas de los ususarios
route.use('/users', require('./users.routes')); //rutas de los ususarios
route.use('/products', require('./products.routes')); //rutas para los productos
route.use('/api/users', require('./api/usersApi.routes')); //rutas para API-usuarios
route.use('/api/products', require('./api/productsApi.routes')); //rutas para API-productos


// Acá exportamos el resultado
module.exports = route;