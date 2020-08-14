import UploadImageUseCase from "./UploadImageUseCase";
import { UploadImagesAndSaveURLIntoDatabase } from "@domain/uploads-images/UploadImagesAndSaveURLIntoDatabase";

const UploadImage = new UploadImageUseCase(
  new UploadImagesAndSaveURLIntoDatabase()
);

export { UploadImage };
