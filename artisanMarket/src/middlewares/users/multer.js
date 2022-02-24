const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/images/users'));
  },
  filename: function (req, file, cb) {
    cb(null, 'avatar' + '-' + Date.now() + path.extname(file.originalname));
  }
})

module.exports = multer({ storage });