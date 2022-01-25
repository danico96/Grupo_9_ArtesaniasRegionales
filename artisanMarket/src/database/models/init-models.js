var DataTypes = require("sequelize").DataTypes;
var _products = require("./products");
var _regions = require("./regions");
var _roles = require("./roles");
var _users = require("./users");

function initModels(sequelize) {
  var products = _products(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

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
