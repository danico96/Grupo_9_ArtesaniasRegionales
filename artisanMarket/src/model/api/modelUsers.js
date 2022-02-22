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
  }
};

module.exports = apiModelUsers;
