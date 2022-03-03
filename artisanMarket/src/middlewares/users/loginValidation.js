const { check, validationResult } = require('express-validator');

const loginValidation = [
  check('email')
  .isEmail().withMessage('Ingrese un email válido'),
  check('password')
  .notEmpty().withMessage('Escribe tu contraseña').bail()
  .isLength({min: 8}).withMessage('Contraseña incorrecta')
]

const errorsLogin = (req, res, next) => {
  let errors =  validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        res.render("./users/login", { errores: errors.array(), old: req.body });
      }
}

module.exports = {loginValidation, errorsLogin};