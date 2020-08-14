import UploadImageUseCase from "./upload-image/UploadImageUseCase";
import { UploadImagesAndReturnTheyURL } from "@domain/uploads-images/UploadImagesAndReturnTheyURL";

const UploadImage = new UploadImageUseCase(new UploadImagesAndReturnTheyURL());

export { UploadImage };
