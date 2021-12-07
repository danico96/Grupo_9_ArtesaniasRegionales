const { usermodel, productsmodel } = require("../model");
const usersDB = require("../data/users.json");
const bcryptjs = require("bcryptjs");

const controller = {
  homeUser: (req, res) => {
    res.render("./web/index", { products: productsmodel.getProducts() });
  },
  loginUser: (req, res, next) => {
    res.render("./users/login");
  },
  loginProcess: (req, res) => {
    let userToLogin = usermodel.findByField("email", req.body.email);
    if (userToLogin) {
      let Okpass = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (Okpass) {
        delete userToLogin.password;
        // req.session.userLogged = userToLogin;
        return res.redirect("/");
      }
    }
    return res.render("./users/login", {
      errors: {
        email: {
          msg: "Las credenciales son inválidas",
        },
      },
    });
  },
  registerUser: (req, res) => {
    res.render("./users/register");
  },
  storeUser: (req, res) => {
    let newUser = {
      id: Date.now(),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      category: req.body.category,
      image: req.file.path,
    };
    usermodel.createUser(newUser);

    res.redirect('/login');
  },
};

module.exports = controller;
