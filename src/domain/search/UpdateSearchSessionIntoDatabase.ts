import { IChangeSearchSession } from "@protocols/search/IChangeSearchSession";
import Search from "@models/Search";

class UpdateSearchSessionIntoDatabase implements IChangeSearchSession {
  async open(searchId: string) {
    await Search.findByIdAndUpdate(
      searchId,
      {
        session: "Aberta",
      },
      {
        lean: true,
        runValidators: true,
      }
    );
  }
  async close(searchId: string) {
    await Search.findByIdAndUpdate(
      searchId,
      {
        session: "Fechada",
      },
      {
        lean: true,
        runValidators: true,
      }
    );
  }
}

export { UpdateSearchSessionIntoDatabase };
