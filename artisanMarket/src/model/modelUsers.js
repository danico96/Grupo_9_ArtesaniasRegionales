const path = require("path");
const db = require(path.resolve(__dirname, '../database/models'));

const modelUsers = {
  getUsers: async function () {
    try {
      const result = await db.users.findAll();
      return result;
    } catch (error) {
      console.log(error.message);
    }
  },
  getUserByField: async function (user) {
    try {
      const result = await db.users.findOne({
        where: {
          email: user.email,
          password: user.password
        }
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  },
  getOneUser: async function (id) {
    try {
      const user = await db.users.findByPk(id);
      return user;
    } catch (error) {
      console.log(error.message);
    }
  },
  createUser: async function (newUser) {
    try {
      await db.users.create(newUser)
      return console.log("Agregado con éxito.");
  } catch (error) {
      console.log(error.message);
  }
  },
  updateUser: async function (userId, userUpdated) {
    try {
      await db.users.update(
        {
          ...userUpdated
        },
        {
          where: { id: userId }
        });
      return console.log("Actualizado con éxito");
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteUser: async function (userId) {
    try {
      await db.users.destroy({
        where: { id: userId }
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = modelUsers;
