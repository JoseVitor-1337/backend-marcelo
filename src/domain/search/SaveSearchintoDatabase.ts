import { ICreateSearch, ISearchFilters } from "@protocols/search/ICreateSearch";
import Search, { ISearch } from "@models/Search";

class SaveSearchintoDatabase implements ICreateSearch {
  async findSearch(searchFilters: ISearchFilters) {
    const { title, researcher, content } = searchFilters;

    const hasSearch = await Search.findOne({
      researcher,
      title,
      content,
    });

    return hasSearch ? true : false;
  }

  async save(search: ISearch): Promise<ISearch> {
    const newSearch = await Search.create(search);

    return newSearch;
  }
}

export { SaveSearchintoDatabase };
