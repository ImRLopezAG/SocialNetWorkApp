const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

exports.imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/wwwroot');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + '-' + file.originalname);
  },
});
