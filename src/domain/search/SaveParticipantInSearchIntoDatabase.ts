import { IAddParticipantIntoSearch } from "@protocols/search";
import Search from "@models/Search";

class SaveParticipantInSearchIntoDatabase implements IAddParticipantIntoSearch {
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
            answeredQuestions: [],
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

export { SaveParticipantInSearchIntoDatabase };
