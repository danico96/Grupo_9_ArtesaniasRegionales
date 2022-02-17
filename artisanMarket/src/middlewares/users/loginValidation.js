const { check } = require('express-validator');

let loginValidation = [
  check('email')
  .isEmail().withMessage('Ingrese un email válido'),
  
  check('password')
  .notEmpty().withMessage('Escribe tu contraseña').bail()
  .isLength({min: 8}).withMessage('Contraseña incorrecta'),  

]

module.exports = loginValidation;