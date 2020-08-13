export interface IVarifyIfHasAcess {
  hasToken(token: string): Promise<void>;
  decodedToken(token: string): any;
}
