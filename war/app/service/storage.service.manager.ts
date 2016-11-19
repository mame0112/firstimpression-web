import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService, STORAGE_KEY } from './storage.service';

import { QuestionData } from '../data/question.data';
import { AnsweredQuestionData } from '../data/answered.question.data';

import { Constants } from '../constant/constants';

@Injectable()
export class LocalStorageManager{

	answeredQuestions: QuestionData[];

	constructor(private localStorage : LocalStorageService){
		console.log("Constructor");
		let notAnswered = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		if(!notAnswered){
			notAnswered = new Array();
			this.localStorage.set(STORAGE_KEY.ANSWERED_QUESTIONS, notAnswered);
		}
	}

	setAnsweredQuestion(answered: AnsweredQuestionData): void{
		console.log("setAnsweredQuestion");

		var notAnswered: Array<AnsweredQuestionData>;

		if(!answered){
			throw "AnsweredQuestionData cannot be null nor undefined";
		}

		var questionId = answered.questionData.questionId;

		if(questionId === Constants.NO_QUESTION){
			throw "Question id cannot be NO_QUESTION";
		}

		notAnswered = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		//TODO Need to check if same question id has already been answered.

		notAnswered.push(answered);
	}

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