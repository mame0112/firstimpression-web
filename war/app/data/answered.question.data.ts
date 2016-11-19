import { QuestionData } from './question.data';

export class AnsweredQuestionData{
	selectedOption: number;
	questionData: QuestionData;

	constructor(selectedOption: number,	questionData: QuestionData){
		this.selectedOption = selectedOption;
		this.questionData = questionData;
	}
};