const { check } = require('express-validator');

let registerValidation = [
  check('name')
  .notEmpty().withMessage('Escribe tu nombre').bail()
  .isLength({min: 2}).withMessage('Nombre demasiado corto'),

  check('lastname')
  .notEmpty().withMessage('Escribe tu apellido').bail()
  .isLength({min: 2}).withMessage('Apellido demasiado corto'),

  check('email')
  .isEmail().withMessage('Ingrese un email válido'),
  
  check('password')
  .notEmpty().withMessage('Escribe una contraseña').bail()
  .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),  

]

module.exports = registerValidation;