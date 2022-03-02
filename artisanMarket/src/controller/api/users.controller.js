const { apiUserModel } = require("../../model");

const apiuserscontroller = {
  Users: async (req, res) => {
    try {
      const hostname = req.hostname;
      const protocol = req.protocol;
      const users = await apiUserModel.getUsers();
      const usersDetail = users.map((user) => {
        return (user = {
          id: user.id,
          nombre: user.name,
          apellido: user.lastname,
          email: user.email,
          imagen: protocol + "://" + hostname + "/images/users/" + user.image,
          detalle: protocol + "://" + hostname + "/api/users/" + user.id,
        });
      });
      return res.status(200).json({
        count: users.length,
        list: usersDetail,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  detailUser: async (req, res) => {
    try {
      const hostname = req.hostname;
      const protocol = req.protocol;
      let userId = req.params.id;
      let user = await apiUserModel.getOneUser(userId);

      return res.status(200).json({
        id: user.id,
        nombre: user.name,
        apellido: user.lastname,
        email: user.email,
        imagen: protocol + "://" + hostname + "/images/users/" + user.image,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = apiuserscontroller;
