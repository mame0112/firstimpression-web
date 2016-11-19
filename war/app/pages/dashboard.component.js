"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var question_service_1 = require('../service/question.service');
var constants_1 = require('../constant/constants');
var storage_service_manager_1 = require('../service/storage.service.manager');
var answered_question_data_1 = require('../data/answered.question.data');
var DashboardComponent = (function () {
    function DashboardComponent(questionService, storageManager) {
        this.questionService = questionService;
        this.storageManager = storageManager;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().then(function (questions) { return _this.questionData = questions; });
    };
    DashboardComponent.prototype.onChoiceASelected = function (question) {
        console.log("onChoiceASelected");
        this.storeAnsweredQuestion(constants_1.Constants.CHOICE_A, question);
    };
    DashboardComponent.prototype.onChoiceBSelected = function (question) {
        console.log("onChoiceBSelected");
        this.storeAnsweredQuestion(constants_1.Constants.CHOICE_B, question);
    };
    DashboardComponent.prototype.storeAnsweredQuestion = function (selectedChoice, questionData) {
        var answered = new answered_question_data_1.AnsweredQuestionData(selectedChoice, questionData);
        this.storageManager.setAnsweredQuestion(answered);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: '../view/debug-view.html'
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionDataService, storage_service_manager_1.LocalStorageManager])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map