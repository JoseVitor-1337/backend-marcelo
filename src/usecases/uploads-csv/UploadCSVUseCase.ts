import { IUploadCSV } from "@protocols/uploads-csv";
import { IGetSearchs } from "@protocols/search";

class UploadCSVUseCase {
  constructor(private csv: IUploadCSV, private getSearch: IGetSearchs) {}

  async generateCSV(searchId: string) {
    const search = await this.getSearch.findSearchToMakeCSVFile(searchId);

    if (!search) {
      throw new Error("Pesquisa não encontrada");
    }

    const { participants, status } = search;

    let sequelizedSearchInfo = await this.csv.mergeTwoArrayOfObjects(
      status,
      participants
    );

    let tableFormatIntoCSV = await this.csv.transformObjectsVectorIntoArray(
      sequelizedSearchInfo
    );

    const pathToCSVFile = await this.csv.generateTheCSV(tableFormatIntoCSV);

    return pathToCSVFile;
  }
}

export default UploadCSVUseCase;
