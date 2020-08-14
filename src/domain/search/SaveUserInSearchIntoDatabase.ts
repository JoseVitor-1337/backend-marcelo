import { IAddParticipantIntoSearch } from "@protocols/search/IAddParticipantIntoSearch";
import Search from "@models/Search";

class SaveUserInSearchIntoDatabase implements IAddParticipantIntoSearch {
  async updateSearchToAddParticipant(
    searchId: string,

    participantId: string
  ) {
    const updatedSearch = await Search.findByIdAndUpdate(
      searchId,
      {
        $push: {
          status: {
            participantId: participantId,
            answeredQuestions: 0,
            correctQuestions: [],
            status: "Pendente",
            attempts: 0,
          },
          participants: participantId,
        },
      },
      {
        new: true,
        lean: true,
      }
    );

    return updatedSearch;
  }
}

export { SaveUserInSearchIntoDatabase };
