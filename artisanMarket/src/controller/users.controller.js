const { usermodel } = require("../model");
const bcryptjs = require("bcryptjs");

const controller = {
  indexUsers: async (req, res) => {
    try {
      const users = await usermodel.getUsers();
      return res.render("./users/users", { users });
    } catch (error) {
      console.log(error.message);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      res.render("./users/login");
    } catch (error) {
      console.log(error.message);
    }
  },
  loginProcess: async function (req, res) {
    try {
      const user = await usermodel.loginVerification(req.body.email);
      if (user.length == 0) {
        return res.render("./users/login", {
          errors: {
            email: { msg: "Correo no encontrado" },
          },
          oldData: req.body,
        });
      }
      if (
        !bcryptjs.compareSync(req.body.password, user[0].dataValues.password)
      ) {
        console.log('esta es la ' + user[0].dataValues.password);
        return res.render("./users/login", {
          errors: {
            password: { msg: "Contraseña Incorrecta" },
          },
          oldData: req.body,
        });
      } else {
        delete user[0].dataValues.password;
        req.session.userLogged = user;
        console.log(user);
        res.redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("/");
  },
  registerUser: async (req, res) => {
    try {
      res.render("./users/register");
    } catch (error) {
      console.log(error.message);
    }
  },
  storeUser: async (req, res) => {
    try {
      let newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file != undefined ? req.file.filename : 'default.jpg',
        roles_id: 2,
      };
      await usermodel.createUser(newUser);
      res.redirect("./login");
    } catch (error) {
      console.log(error.message);
    }
  },
  detailUser: async (req, res) => {
    try {
      let userId = req.params.id;
      let user = await usermodel.getOneUser(userId);

      res.render("./users/userDetail", { user });
    } catch (error) {
      console.log(error.message);
    }
  },
  editUser: async (req, res) => {
    try {
      let userId = req.params.id;
      let user = await usermodel.getOneUser(userId);
      res.render("./users/userEdit", { user });
    } catch (error) {
      console.log(error.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      let userId = req.params.id;

      let userEdit = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file.filename,
        roles_id: req.body.role,
      };
      await usermodel.updateUser(userId, userEdit);

      res.redirect("/users");
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      let userId = req.params.id;
      await usermodel.deleteUser(userId);
      res.redirect("/users");
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = controller;
