import UploadCSVUseCase from "./UploadCSVUseCase";
import { GenerateCSVFromSearchInfo } from "@domain/uploads-csv/GenerateCSVFromSearchInfo";
import { GetSearchFromDatabase } from "@domain/search";

const UploadCSV = new UploadCSVUseCase(
  new GenerateCSVFromSearchInfo(),
  new GetSearchFromDatabase()
);

export { UploadCSV };
