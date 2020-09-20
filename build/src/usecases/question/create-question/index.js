"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestion = void 0;
const CreateQuestionUseCase_1 = require("./CreateQuestionUseCase");
const question_1 = require("@domain/question");
const GetSearchFromDatabase_1 = require("@domain/search/GetSearchFromDatabase");
const CreateQuestion = new CreateQuestionUseCase_1.CreateQuestionUseCase(new question_1.SaveQuestionsIntoDatabase(), new GetSearchFromDatabase_1.GetSearchFromDatabase());
exports.CreateQuestion = CreateQuestion;
