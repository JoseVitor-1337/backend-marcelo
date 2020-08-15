import { IGetSearch } from "@protocols/search/IGetSearch";
import Search, { ISearch } from "@models/Search";

class GetSearchFromDatabase implements IGetSearch {
  async findSearch(searchId: string): Promise<ISearch> {
    const search = await Search.findById(searchId).lean();

    return search;
  }
}

export { GetSearchFromDatabase };
