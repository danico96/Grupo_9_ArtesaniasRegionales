const { apiUserModel } = require("../../model");

const apiuserscontroller = {
  Users: async (req, res) => {
    try {
      const users = await apiUserModel.getUsers();
      return res.status(200).json({
        count: users.length,
        list: users
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  detailUser: async (req, res) => {
    try {
      let userId = req.params.id;
      let user = await apiUserModel.getOneUser(userId);

      return res.status(200).json({
        id: user.id,
        nombre: user.name,
        apellido: user.lastname,
        email: user.email,
        imagen: 'http://localhost:3000/images/users/' + user.image
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = apiuserscontroller;