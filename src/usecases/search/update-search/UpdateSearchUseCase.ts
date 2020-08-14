import { ISearch } from "@models/Search";
import { IUpdateSearch } from "@protocols/search";

class UpdateSearchUseCase {
  constructor(private updateSearch: IUpdateSearch) {}

  async update(searchId: string, search: ISearch) {
    const editSearch = await this.updateSearch.update(searchId, search);

    return editSearch;
  }
}

export default UpdateSearchUseCase;
