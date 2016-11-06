import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from '../service/question.service';

import { LocalStorageService, STORAGE_KEY } from '../service/storage.service';

import { QuestionData } from '../data/question.data';

@Component ({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: '../view/debug-view.html'
})

export class DashboardComponent implements OnInit{

	questionData: QuestionData[];

	constructor(
		private questionService: QuestionDataService,
		private storageService: LocalStorageService
	){}


	ngOnInit(): void {

		this.questionService.getQuestions().then(questions => this.questionData = questions);
	}

	onChoiceASelected(question: QuestionData): void {
		console.log("onChoiceASelected");
	}

	onChoiceBSelected(question: QuestionData): void {
		console.log("onChoiceBSelected");
	}

}