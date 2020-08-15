import { IGetSearchs, ISearchFilters, IPagination } from "@protocols/search";
import Search, { ISearch, IStatus } from "@models/Search";

class GetSearchFromDatabase implements IGetSearchs {
  async findSearchByParticipantView(
    participantStatus: IStatus,
    filters: ISearchFilters,
    pagination: IPagination
  ) {
    const { type, title } = filters;
    const { page, itemPerPage } = pagination;

    const searchs = await Search.find({
      participants: {
        $in: [participantStatus.participantId],
      },
      session: "Aberta",
      $and: [
        {
          type: {
            $regex: type ? type : "",
          },
        },
        {
          title: {
            $regex: title ? title : "",
          },
        },
      ],
    })
      .skip((page - 1) * itemPerPage)
      .limit(itemPerPage)
      .select("-participants")
      .populate("questions");

    const sequelizedSearchs = searchs.filter((search) => {
      return search.status.some((statu) => {
        return statu.status === participantStatus.status;
      });
    });

    return sequelizedSearchs;
  }

  async findAllSearchsForAdminister(
    filters: ISearchFilters,
    pagination: IPagination
  ) {
    const { type, title } = filters;
    const { page, itemPerPage } = pagination;

    const searchs = await Search.find({
      $and: [
        {
          type: {
            $regex: type ? type : "",
          },
        },
        {
          title: {
            $regex: title ? title : "",
          },
        },
      ],
    })
      .skip((page - 1) * itemPerPage)
      .limit(itemPerPage)
      .populate("participants")
      .populate("questions");

    return searchs;
  }

  async findSearchsOfResearcher(
    researchId: string,
    filters: ISearchFilters,
    pagination: IPagination
  ) {
    const { type, title } = filters;
    const { page, itemPerPage } = pagination;

    const searchs = await Search.find({
      researcher: researchId,
      $and: [
        {
          type: {
            $regex: type ? type : "",
          },
        },
        {
          title: {
            $regex: title ? title : "",
          },
        },
      ],
    })
      .skip((page - 1) * itemPerPage)
      .limit(itemPerPage)
      .populate("participants")
      .populate("questions");

    return searchs;
  }
  async findSearchByid(searchId: string): Promise<ISearch> {
    const search = await Search.findById(searchId).lean();

    return search;
  }

  async findSearchToMakeCSVFile(searchId: string) {
    const search = await Search.findById(searchId)
      .lean()
      .populate("researcher")
      .populate("questions")
      .populate("participants");

    return search;
  }
}

export { GetSearchFromDatabase };
