const { usermodel } = require("../model");
const usersDB = require("../data/users.json");
const bcryptjs = require("bcryptjs");

const controller = {
  indexUsers: (req, res) => {
    res.render('./users/users', { users: usermodel.getUsers() });
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
        req.session.usuario = userToLogin;
        if (req.body.recordarme) {
          res.cookie("email", userToLogin.email, {
            maxAge: 1000 * 60 * 60 * 24,
          });
        }
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
  logout: (req, res) => {
    req.session.destroy();
    res.cookie("email", null, { maxAge: -1 });
    res.redirect("/");
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
      imgPerfil: req.file ? req.file.filename : "default.jpg",
      password: bcryptjs.hashSync(req.body.password, 10),
      category: req.body.category,
      role: 1,
    };
    usermodel.createUser(newUser);

    res.redirect("/login");
  },
  detailUser: (req, res) => {
    let userId = req.params.id;
    let user = usermodel
      .getUsers()
      .find((item) => item.id == userId);

    res.render("./users/userDetail", { user });
  },
  editUser: (req, res) => {
    let userId = req.params.id;
    let user = usermodel.getUsers().find(item => item.id == userId);
    res.render('./users/userEdit', { user });
  },
  updateUser: (req, res) => {
    let userId = req.params.id;

    let userEdit = {
      "id": req.params.id,
      "first_name": req.params.first_name,
      "last_name": req.params.last_name,
      "email": req.params.email,
      "imgPerfil": req.params.imgPerfil,
      "category": req.params.category,
      "role": req.params.role,
    }
    usersmodel.updateUser(userId, userEdit);

    res.redirect("/users");
  },
  deleteUser: (req, res) => {
    console.log('Aquí está');
    res.send('Entrando');
  }
};

module.exports = controller;
