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
var mock_question_data_1 = require('../data/mock/mock.question.data');
var QuestionDataService = (function () {
    function QuestionDataService() {
    }
    QuestionDataService.prototype.getQuestions = function () {
        return mock_question_data_1.QUESTION_DATA;
    };
    QuestionDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuestionDataService);
    return QuestionDataService;
}());
exports.QuestionDataService = QuestionDataService;
//# sourceMappingURL=question.service.js.map