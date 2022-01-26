var DataTypes = require("sequelize").DataTypes;
var _products = require("./products");
var _profile = require("./profile");
var _regions = require("./regions");
var _users = require("./users");

function initModels(sequelize) {
  var products = _products(sequelize, DataTypes);
  var profile = _profile(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  users.belongsTo(profile, { as: "profile", foreignKey: "profile_id"});
  profile.hasMany(users, { as: "users", foreignKey: "profile_id"});
  products.belongsTo(regions, { as: "region", foreignKey: "regions_id"});
  regions.hasMany(products, { as: "products", foreignKey: "regions_id"});

  return {
    products,
    profile,
    regions,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
