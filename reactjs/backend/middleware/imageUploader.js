const multer = require("multer");
const path = require("path");

// Set Storage Engine
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, '/uploads'); // Set the destination folder for uploaded resumes
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const filename = `${file.fieldname}-${new Date().toISOString()}${extname}`;
    cb(null, filename); // Set the filename of the uploaded resume
  },
  destination: function (req, file, cb) {
    cb(null, '/uploads'); // Set the destination folder for uploaded resumes
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const filename = `${file.fieldname}-${new Date().toISOString()}${extname}`;
    cb(null, filename); // Set the filename of the uploaded resume
  },
});

// Check File Type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = { upload };
