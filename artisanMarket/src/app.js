const express = require('express');
const app = express();
const path = require('path');
const rutas = require('./routes/index.routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', rutas);

module.exports = app;