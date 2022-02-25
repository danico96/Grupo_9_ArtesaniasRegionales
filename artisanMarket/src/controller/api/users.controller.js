const { apiUserModel } = require("../../model");

const apiuserscontroller = {
  Users: async (req, res) => {
    try {
      const users = await apiUserModel.getUsers();
      const usersDetail = users.map((user) => {
        return user = {
        id: user.id,
        nombre: user.name,
        apellido: user.lastname,
        email: user.email,
        imagen: 'http://localhost:3500/images/users/' + user.image,
        detalle: 'http://localhost:3500/api/users/' + user.id 
      }
      })
      return res.status(200).json({
        count: users.length,
        list: usersDetail
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
