const { modelUsers } = require("../model");

async function userSession(req, res, next) {
  let user = undefined;
  res.locals.isLogged = false;
  let userLog = req.cookies.recordar;
  if (userLog != undefined) {
    user = await modelUsers.getUserByField("email", userLog);
  }
  if (user != undefined) {
    delete user.password;
    req.session.userLogged = user;
  }
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userInSession = req.session.userLogged;
  }
  next();
}

module.exports = userSession;