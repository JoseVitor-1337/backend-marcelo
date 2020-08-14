import { IUploadImages } from "@protocols/uploads-images";
import { PORT } from "src/config/enviroment";

class UploadImagesAndSaveURLIntoDatabase implements IUploadImages {
  async transformFilanemesIntoArray(files: any): Promise<any[]> {
    let filenames = [];

    for (const item in files) {
      filenames[item] = files[item].filename;
    }

    return filenames;
  }
  async getFilenamesAndReturnTheyPaths(filenames: string[]): Promise<string[]> {
    return filenames.map((filename) => {
      return `http://localhost:${PORT}/uploads/${filename}`;
    });
  }
}

export { UploadImagesAndSaveURLIntoDatabase };
