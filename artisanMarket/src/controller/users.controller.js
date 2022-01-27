const { usermodel } = require("../model");
const bcryptjs = require("bcryptjs");

const controller = {
  indexUsers: async (req, res) => {
    try {
      const users = await usermodel.getUsers();
      return res.render('./users/users', { users });
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
  loginProcess: async (req, res) => {
    try {
      let body = req.body;
      const result = await usermodel.getUserByField(body);
      if (result.length) {
        return res.redirect('/')
      }
      return res.render("./users/login", {
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
      // let userToLogin = usermodel.findByField("email", req.body.email);
      // if (userToLogin) {
      //   let Okpass = bcryptjs.compareSync(
      //     req.body.password,
      //     userToLogin.password
      //   );
      //   if (Okpass) {
      //     delete userToLogin.password;
      //     req.session.usuario = userToLogin;
      //     if (req.body.recordarme) {
      //       res.cookie("email", userToLogin.email, {
      //         maxAge: 1000 * 60 * 60 * 24,
      //       });
      //     }
      //     return res.redirect("/");
      //   }
      // }
      // return res.render("./users/login", {
      //   errors: {
      //     email: {
      //       msg: "Las credenciales son inválidas",
      //     },
      //   },
      // });
    } catch (error) {
      console.log(error.message);
    }
  },
  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.cookie("email", null, { maxAge: -1 });
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
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
        "name": req.body.name,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "password": req.body.password,
        "image": req.file.filename,
        "roles_id": req.body.role
      }
      await usermodel.createUser(newUser);

      res.redirect("/users");
    } catch (error) {
      console.log(error.message);
    }
  },
  detailUser: async (req, res) => {
    try {
      let userId = req.params.id;
      let user = await usermodel.getOneUser(userId);

      res.render('./users/userDetail', { user });
    } catch (error) {
      console.log(error.message);
    }
  },
  editUser: async (req, res) => {
    try {
      let userId = req.params.id;
      let user = await usermodel.getOneUser(userId);
      res.render('./users/userEdit', { user });
    } catch (error) {
      console.log(error.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      let userId = req.params.id;

      let userEdit = {
        "name": req.body.name,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "password": req.body.password,
        "image": req.file.filename,
        "roles_id": req.body.role,
      }
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
  }
};

module.exports = controller;
