const { check, validationResult } = require('express-validator');

let productsValidation = [
  check('productName')
  .notEmpty().withMessage('Escribe el nombre del producto').bail()
  .isLength({min: 5}).withMessage('El nombre debe tener como mínimo 5 caracteres'),
  check('description')
  .notEmpty().withMessage('Escribe una descripción').bail()
  .isLength({min: 20}).withMessage('La descripción debe tener mínimo 20 caracteres'),
  check('quantity')
  .notEmpty().withMessage('Define la cantidad del producto'),
  check('price')
  .notEmpty().withMessage('Define el precio del producto')
]

const errorsProduct = (req, res, next) => {
  let errors =  validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        res.render('./products/productCreate', { errors: errors.array(), old: req.body });
      }
}

const errorsEditProduct = (req, res, next) => {
  let errors =  validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        res.render('./products/productEdit/' + req.params.id, { errors: errors.array(), old: req.body });
      }
}

module.exports = {productsValidation, errorsProduct, errorsEditProduct};