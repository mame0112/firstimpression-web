import { Injectable } from '@angular/core';

import { QuestionData } from '../data/question.data';
import { QUESTION_DATA } from '../data/mock/mock.question.data';

@Injectable()
export class QuestionDataService{
	// getQuestions(): QuestionData[]{
	// 	return QUESTION_DATA;
	// }

	getQuestions(): Promise<QuestionData[]>{
		return Promise.resolve(QUESTION_DATA);
	}

}