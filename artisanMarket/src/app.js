const express = require('express');
const app = express();
const path = require('path');
const rutas = require('./routes');
const methodOverride = require('method-override');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

/*Middlewares*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); 

app.use(express.static(path.resolve(__dirname, './public')));

app.use('/', rutas);

module.exports = app;