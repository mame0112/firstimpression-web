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
var storage_service_1 = require('./storage.service');
var constants_1 = require('../constant/constants');
var debug_1 = require('../util/debug');
var LocalStorageManager = (function () {
    function LocalStorageManager(localStorage, logUtil) {
        this.localStorage = localStorage;
        this.TAG = "LocalStorageManager";
        this.logUtil = logUtil;
        this.logUtil.d(this.TAG, "constructor");
        var notAnswered = this.localStorage.get(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS);
        if (!notAnswered) {
            notAnswered = new Array();
            this.localStorage.set(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS, notAnswered);
        }
    }
    LocalStorageManager.prototype.setAnsweredQuestion = function (answered) {
        this.logUtil.d(this.TAG, "setAnsweredQuestion");
        var notAnswered;
        if (!answered) {
            throw "AnsweredQuestionData cannot be null nor undefined";
        }
        var questionId = answered.questionData.questionId;
        if (questionId === constants_1.Constants.NO_QUESTION) {
            throw "Question id cannot be NO_QUESTION";
        }
        notAnswered = this.localStorage.get(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS);
        //TODO Need to check if same question id has already been answered.
        notAnswered.push(answered);
    };
    LocalStorageManager.prototype.getAnsweredQuestions = function () {
        this.logUtil.d(this.TAG, "getAnsweredQuestion");
        return this.localStorage.get(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS);
    };
    LocalStorageManager.prototype.retrieveNotAnsweredQuestions = function (newQuestions) {
        this.logUtil.d(this.TAG, "getNotAnsweredQuestions");
        if (!newQuestions) {
            throw "question cannot be null nor undefined";
        }
        var notAnswered = this.localStorage.get(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS);
        for (var i = 0; i < newQuestions.length; i++) {
            var id = newQuestions[i].questionId;
        }
        return null;
    };
    LocalStorageManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [storage_service_1.LocalStorageService, debug_1.LogUtil])
    ], LocalStorageManager);
    return LocalStorageManager;
}());
exports.LocalStorageManager = LocalStorageManager;
//# sourceMappingURL=storage.service.manager.js.map