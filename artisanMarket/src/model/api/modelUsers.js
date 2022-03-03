const path = require("path");
const db = require(path.resolve(__dirname, "../../database/models"));

const apiModelUsers = {
  getUsers: async function () {
    try {
      const result = await db.users.findAll();
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
  getLastUser: async function () {
    try {
      let users = await db.users.findAll();

      let ids = users.map(user => user.id);
      
      const maxId = Math.max(...ids);
      
      const lastUser = await db.users.findByPk(maxId);
      return lastUser;

    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = apiModelUsers;
