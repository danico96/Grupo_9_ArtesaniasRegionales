let DataTypes = require("sequelize").DataTypes;
let _products = require("./products");
let _regions = require("./regions");
let _roles = require("./roles");
let _users = require("./users");

function initModels(sequelize) {
  let products = _products(sequelize, DataTypes);
  let regions = _regions(sequelize, DataTypes);
  let roles = _roles(sequelize, DataTypes);
  let users = _users(sequelize, DataTypes);

  products.belongsTo(regions, { as: "region", foreignKey: "regions_id"});
  regions.hasMany(products, { as: "products", foreignKey: "regions_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "roles_id"});
  roles.hasMany(users, { as: "users", foreignKey: "roles_id"});

  return {
    products,
    regions,
    roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
