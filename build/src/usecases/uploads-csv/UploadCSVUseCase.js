"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadCSVUseCase {
    constructor(csv, getSearch) {
        this.csv = csv;
        this.getSearch = getSearch;
    }
    async generateCSV(searchId) {
        const search = await this.getSearch.findSearchToMakeCSVFile(searchId);
        if (!search) {
            throw new Error("Pesquisa não encontrada");
        }
        const { participants, status } = search;
        let sequelizedSearchInfo = await this.csv.mergeTwoArrayOfObjects(status, participants);
        let tableFormatIntoCSV = await this.csv.transformObjectsVectorIntoArray(sequelizedSearchInfo);
        const pathToCSVFile = await this.csv.generateTheCSV(tableFormatIntoCSV);
        return pathToCSVFile;
    }
}
exports.default = UploadCSVUseCase;
