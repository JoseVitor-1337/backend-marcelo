import { IUploadImages } from "@protocols/uploads-images";

class UploadImageUseCase {
  constructor(private uploadImages: IUploadImages) {}

  async getPathsFromTheImages(files: any) {
    const filenames = await this.uploadImages.transformFilanemesIntoArray(
      files
    );

    const pathOfFilenames = await this.uploadImages.getFilenamesAndReturnTheyPaths(
      filenames
    );

    return pathOfFilenames;
  }
}

export default UploadImageUseCase;
