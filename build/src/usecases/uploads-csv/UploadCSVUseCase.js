"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UploadCSVUseCase {
    constructor(csv, getSearch) {
        this.csv = csv;
        this.getSearch = getSearch;
    }
    generateCSV(searchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield this.getSearch.findSearchToMakeCSVFile(searchId);
            if (!search) {
                throw new Error("Pesquisa não encontrada");
            }
            const { participants, status } = search;
            let sequelizedSearchInfo = yield this.csv.mergeTwoArrayOfObjects(status, participants);
            let tableFormatIntoCSV = yield this.csv.transformObjectsVectorIntoArray(sequelizedSearchInfo);
            const pathToCSVFile = yield this.csv.generateTheCSV(tableFormatIntoCSV);
            return pathToCSVFile;
        });
    }
}
exports.default = UploadCSVUseCase;
