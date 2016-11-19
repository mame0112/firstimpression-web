import { LocalStorageService, STORAGE_KEY } from './storage.service';

import { QuestionData } from '../data/question.data';

export class LocalStorageManager {

	constructor(private localStorage : LocalStorageService){}

	answeredQuestions: QuestionData[];

	getAnsweredQuestions(): Array<QuestionData>{
		console.log("getAnsweredQuestion");

		return this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

	}

	retrieveNotAnsweredQuestions(newQuestions: QuestionData[]): Array<QuestionData>{
		console.log("getNotAnsweredQuestions");

		if(!newQuestions){
			throw "question cannot be null nor undefined";
		}

		let notAnswered = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		for (var i = 0; i < newQuestions.length; i++) { 
			let id = newQuestions[i].questionId;
			//TODO Retrieve not answered question
		}

		return null;
	}
}