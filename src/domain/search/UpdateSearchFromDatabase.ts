import { IUpdateSearch } from "@protocols/search";
import Search, { ISearch } from "@models/Search";

class UpdateSearchFromDatabase implements IUpdateSearch {
  async update(searchId: string, search: ISearch): Promise<ISearch> {
    const newSearch = await Search.findByIdAndUpdate(searchId, search, {
      new: true,
      lean: true,
      runValidators: true,
    });

    return newSearch;
  }
}

export { UpdateSearchFromDatabase };
