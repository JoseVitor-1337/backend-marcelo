import Search, { IStatus, ISearch } from "@models/Search";
import { IParticipantAnswerSearch } from "@protocols/search";

class SaveParticipantResponsesIntoDatabase implements IParticipantAnswerSearch {
  async verifyStatusOfParticipant(search: ISearch, status: IStatus) {
    if (search.retries === status.attempts + 1) {
      status.status = "Completado";
      status.attempts = search.retries;
    } else {
      status.status = "Pendente";
      status.attempts++;
    }

    if (search.questions.length < status.answeredQuestions) {
      throw new Error(
        `${status.answeredQuestions} não é um número válido para perguntas respondidas`
      );
    }

    if (search.questions.length < status.correctQuestions.length) {
      throw new Error(
        `${status.correctQuestions.length} não é um número válido para as respostas de suas perguntas`
      );
    }

    search.status = search.status.map((searchStatu) => {
      if (searchStatu.participantId === status.participantId) {
        return status;
      } else {
        return searchStatu;
      }
    });

    return search;
  }
  async updateStatusOfParticipantInSearch(search: ISearch, searchId: string) {
    const updatedSearch = await Search.findByIdAndUpdate(searchId, search, {
      new: true,
      lean: true,
    });

    return updatedSearch;
  }
}

export { SaveParticipantResponsesIntoDatabase };
