const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads", "images"),
    filename: (request, file, callback) => {
      console.log(request.body.id);

      const extension = path.extname(file.originalname);
      const name = path.basename(file.originalname, extension);

      callback(null, `${name}-${Date.now()}${extension}`);
    },
  }),
};
