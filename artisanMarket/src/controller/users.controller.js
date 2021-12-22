const {usermodel} = require("../model");
const usersDB = require("../data/users.json");
const bcryptjs = require("bcryptjs");

const controller = {
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
        if(req.body.recordarme){
          res.cookie('email',userToLogin.email,{maxAge: 1000 * 60 * 60 * 24})
        }
        return res.redirect('/');
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
  logout: (req,res) =>{
    req.session.destroy();
    res.cookie('email',null,{maxAge: -1});
    res.redirect('/')
  },
  registerUser: (req, res) => {
    res.render("./users/register");
  },
  storeUser: (req, res) => {
    let newUser = {
      id: usersDB.length + 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      imgPerfil: req.file ? req.file.filename : 'default.jpg',
      password: bcryptjs.hashSync(req.body.password, 10),
      category: req.body.category,
      role: 1
    };
    usermodel.createUser(newUser);

    res.redirect("/login");
  },
};

module.exports = controller;
