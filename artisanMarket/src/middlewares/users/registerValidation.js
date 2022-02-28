const { check, validationResult } = require('express-validator');
const { usermodel } = require('../../model');

// const prueba = usermodel.getUserEmail('pruebaemail2@hotmail.com');

const registerValidation = [
  check('name')
    .notEmpty().withMessage('Escribe tu nombre').bail()
    .isLength({ min: 2 }).withMessage('Nombre demasiado corto'),
  check('lastname')
    .notEmpty().withMessage('Escribe tu apellido').bail()
    .isLength({ min: 2 }).withMessage('Apellido demasiado corto'),
  check('email')
    .isEmail().withMessage('Ingrese un email válido')
    .custom(async value => {
      return await usermodel.getUserEmail(value).then(email => {
        if (email) {
          return Promise.reject('El email ya se encuentra registrado');
        }
      });
    }),
  check('password')
    .notEmpty().withMessage('Escribe una contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
]

const errors = (req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    res.render("./users/register", { errors: errors.array(), old: req.body });
  }
}

const validateImage = (req, res, next) => {
  let error = [];
  if (!req.file) {
    error.push('Imagen requerida');
    return console.log(error);
  }
  const fileTypeAllowed = ['png', 'jpg', 'gif', 'jpeg'];
  const fileExtension = req.file.mimetype.split('/').pop();

  if (!fileTypeAllowed.includes(fileExtension)) {
    error.push('suba una imagen válida');
    return console.log(error);
  }
  next();
}

module.exports = { registerValidation, errors, validateImage };