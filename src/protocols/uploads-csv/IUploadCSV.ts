export interface IUploadCSV {
  generateTheCSV(payload: any): Promise<string>;
  transformObjectsVectorIntoArray(JSON: Object[]): Promise<any[]>;
  mergeTwoArrayOfObjects(
    status: Object[],
    participants: Object[]
  ): Promise<any[]>;
}
