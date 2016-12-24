import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from '../service/question.service';

import { Constants } from '../constant/constants';

import { LocalStorageManager } from '../service/storage.service.manager';

import { QuestionData } from '../data/question.data';
import { AnsweredQuestionData } from '../data/answered.question.data';

@Component ({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: '../view/debug-view.html'
})

export class DashboardComponent implements OnInit{

	questionData: QuestionData[];

	constructor(
		private questionService: QuestionDataService,
		private storageManager: LocalStorageManager
	){}


	ngOnInit(): void {
		this.questionService.getQuestions().then(questions => this.questionData = questions);

	}

	onChoiceASelected(question: QuestionData): void {
		console.log("onChoiceASelected");
		this.storeAnsweredQuestion(Constants.CHOICE_A, question);
	}

	onChoiceBSelected(question: QuestionData): void {
		console.log("onChoiceBSelected");
		this.storeAnsweredQuestion(Constants.CHOICE_B, question);
	}

	private storeAnsweredQuestion(selectedChoice: number, questionData: QuestionData){
		var answered = new AnsweredQuestionData(selectedChoice, questionData);
		this.storageManager.setAnsweredQuestion(answered);
	}

}