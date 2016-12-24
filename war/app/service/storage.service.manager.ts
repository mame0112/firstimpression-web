import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService, STORAGE_KEY } from './storage.service';

import { QuestionData } from '../data/question.data';
import { AnsweredQuestionData } from '../data/answered.question.data';

import { Constants } from '../constant/constants';
import { LogUtil } from '../util/debug';

@Injectable()
export class LocalStorageManager{

	TAG = "LocalStorageManager";
	logUtil: LogUtil;

	answeredQuestions: QuestionData[];

	constructor(private localStorage : LocalStorageService, logUtil: LogUtil){
		this.logUtil = logUtil;
		this.logUtil.d(this.TAG, "constructor");
		let notAnswered = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		if(!notAnswered){
			notAnswered = new Array();
			this.localStorage.set(STORAGE_KEY.ANSWERED_QUESTIONS, notAnswered);
		}
	}

	setAnsweredQuestion(answered: AnsweredQuestionData): void{
		this.logUtil.d(this.TAG, "setAnsweredQuestion");

		var notAnsweredArray: Array<AnsweredQuestionData>;

		if(!answered){
			throw "AnsweredQuestionData cannot be null nor undefined";
		}

		var questionId = answered.questionData.questionId;

		if(questionId === Constants.NO_QUESTION){
			throw "Question id cannot be NO_QUESTION";
		}

		notAnsweredArray = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		//TODO Need to check if same question id has already been answered.

		notAnsweredArray.push(answered);
	}

	getAnsweredQuestions(): Array<QuestionData>{
		this.logUtil.d(this.TAG, "getAnsweredQuestion");

		return this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

	}

	retrieveNotAnsweredQuestions(newQuestions: QuestionData[]): Array<QuestionData>{
		this.logUtil.d(this.TAG, "getNotAnsweredQuestions");

		if(!newQuestions){
			throw "question cannot be null nor undefined";
		}

		let notAnsweredArray =  new Array();

		let answeredArray = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		for (var i = 0; i < newQuestions.length; i++) { 
			let id = newQuestions[i].questionId;

			let isAnswered = false;
			//TODO Retrieve not answered question
			for(var j = 0; j < answeredArray.length; j++){
				let answeredId = answeredArray[j].questionId;
				if(id === answeredId){
					isAnswered = true;
					break;
				}
			}

			if(!isAnswered){
				notAnsweredArray.push(newQuestions[i]);
			}
		}

		return notAnsweredArray;
	}

	retrieveNotAnsweredQuestionsWithAsync(newQuestions: QuestionData[]): Promise<Array<QuestionData>>{

		this.logUtil.d(this.TAG, "retrieveNotAnsweredQuestionsWithAsync: " + newQuestions.length);

		if(!newQuestions){
			throw "question cannot be null nor undefined";
		}

		let notAnsweredArray =  new Array();

		let answeredArray = this.localStorage.get(STORAGE_KEY.ANSWERED_QUESTIONS);

		for (var i = 0; i < newQuestions.length; i++) { 
			let id = newQuestions[i].questionId;

			let isAnswered = false;
			//TODO Retrieve not answered question
			for(var j = 0; j < answeredArray.length; j++){
				let answeredId = answeredArray[j].questionId;
				if(id === answeredId){
					isAnswered = true;
					break;
				}
			}

			if(!isAnswered){
				notAnsweredArray.push(newQuestions[i]);
			}
		}

		return Promise.resolve(notAnsweredArray);
	}
}