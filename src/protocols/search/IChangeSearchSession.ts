export interface IChangeSearchSession {
  open(searchId: string): Promise<void>;
  close(searchId: string): Promise<void>;
}
