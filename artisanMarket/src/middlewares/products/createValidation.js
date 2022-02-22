const { check } = require('express-validator');

let createValidation = [
  check('productName')
  .notEmpty().withMessage('Escribe el nombre del producto').bail()
  .isLength({min: 5}).withMessage('El nombre debe tener como mínimo 5 caracteres'),

  check('description')
  .notEmpty().withMessage('Escribe una descripción').bail()
  .isLength({min: 20}).withMessage('La descripción debe tener mínimo 20 caracteres'),

  check('quantity')
  .notEmpty().withMessage('Define la cantidad del producto'),

  check('price')
  .notEmpty().withMessage('Define el precio del producto'),

  
]

module.exports = createValidation;