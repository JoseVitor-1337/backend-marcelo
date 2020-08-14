

export interface IUploadImages {
  getFilenamesAndReturnTheyPaths(filenames: string[]): Promise<string[]>;
  transformFilanemesIntoArray(files: any[]): Promise<any[]>;
}
