import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "uploads", "images"),
  filename: function (request, file: Express.Multer.File, callback) {
    console.log(request.body.id);

    const extension = path.extname(file.originalname);
    const name = path.basename(file.originalname, extension);

    const filename = `${name}-${Date.now()}${extension}`;

    callback(null, filename);
  },
});

const uploads = multer({ storage });

export default uploads;
