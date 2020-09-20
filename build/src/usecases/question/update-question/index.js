"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestion = void 0;
const UpdateQuestionUseCase_1 = require("./UpdateQuestionUseCase");
const question_1 = require("@domain/question");
const UpdateQuestion = new UpdateQuestionUseCase_1.UpdateQuestionUseCase(new question_1.UpdateQuestionFromDatabase());
exports.UpdateQuestion = UpdateQuestion;
