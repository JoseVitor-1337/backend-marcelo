import { ISearch } from "@models/Search";
import { IGetResearcher } from "@protocols/researcher";
import { ICreateSearch } from "@protocols/search";

class CreateSearchUseCase {
  constructor(
    private createSearch: ICreateSearch,
    private findResearch: IGetResearcher
  ) {}

  async create(search: ISearch) {
    const { title, researcher, content } = search;

    const userIsAResearch = await this.findResearch.find(search.researcher);

    if (!userIsAResearch) {
      throw new Error("Apenas um Pesquisador pode criar uma pesquisa");
    }

    const searchAlreadyExist = await this.createSearch.findSearchByFilters({
      researcher,
      title,
      content,
    });

    if (searchAlreadyExist) {
      throw new Error("Você já esta pesquisa");
    }

    const newSearch = await this.createSearch.save(search);

    return newSearch;
  }
}

export default CreateSearchUseCase;
