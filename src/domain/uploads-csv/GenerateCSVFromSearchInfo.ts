import { IUploadCSV } from "@protocols/uploads-csv";
import { writeToPath } from "@fast-csv/format";
import path from "path";
import { IStatus } from "@models/Search";

class GenerateCSVFromSearchInfo implements IUploadCSV {
  async generateTheCSV(payload: any) {
    writeToPath(
      path.resolve(__dirname, "..", "..", "..", "uploads", "csv", `file.csv`),
      payload
    );

    const pathToCSVFile = "../../../uploads/csv/file.csv";

    return pathToCSVFile;
  }
  async transformObjectsVectorIntoArray(JSON: Object[]) {
    return JSON.map((object: any) => {
      delete object._id;
      delete object.__v;

      return Object.values(object);
    });
  }
  async mergeTwoArrayOfObjects(status: Object[], participants: Object[]) {
    return status.map((statu: IStatus, index) => {
      delete statu.participantId;

      return Object.assign(participants[index], status[index]);
    });
  }
}

export { GenerateCSVFromSearchInfo };
