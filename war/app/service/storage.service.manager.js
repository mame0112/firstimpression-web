"use strict";
var storage_service_1 = require('./storage.service');
var LocalStorageManager = (function () {
    function LocalStorageManager(localStorage) {
        this.localStorage = localStorage;
    }
    LocalStorageManager.prototype.getAnsweredQuestions = function () {
        console.log("getAnsweredQuestion");
        return this.localStorage.get(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS);
    };
    LocalStorageManager.prototype.retrieveNotAnsweredQuestions = function (newQuestions) {
        console.log("getNotAnsweredQuestions");
        if (!newQuestions) {
            throw "question cannot be null nor undefined";
        }
        var notAnswered = this.localStorage.get(storage_service_1.STORAGE_KEY.ANSWERED_QUESTIONS);
        for (var i = 0; i < newQuestions.length; i++) {
            var id = newQuestions[i].questionId;
        }
        return null;
    };
    return LocalStorageManager;
}());
exports.LocalStorageManager = LocalStorageManager;
//# sourceMappingURL=storage.service.manager.js.map