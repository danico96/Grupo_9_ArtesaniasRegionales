const express = require('express');
const app = express();
const path = require('path');
const rutas = require('./routes');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const {userSession, userLogged} = require('./middlewares')
const cors = require('cors')

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());

/*Middlewares*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static(path.resolve(__dirname, './public')));
app.use(userLogged);
app.use(cors())

app.use('/', rutas);

module.exports = app;