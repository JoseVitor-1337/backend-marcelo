import { IChangeSearchSession } from "@protocols/search";

class ChangeSearchSessionUseCase {
  constructor(private changeSearchSession: IChangeSearchSession) {}

  async update(searchId: string, open: boolean) {
    if (open) {
      await this.changeSearchSession.open(searchId);
    } else {
      await this.changeSearchSession.close(searchId);
    }
  }
}

export default ChangeSearchSessionUseCase;
