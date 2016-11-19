"use strict";
var QuestonDataBuilder = (function () {
    function QuestonDataBuilder() {
    }
    QuestonDataBuilder.prototype.setQuestionId = function (questionId) {
        this.questionData.questionId = questionId;
        return this;
    };
    QuestonDataBuilder.prototype.setDescription = function (description) {
        this.questionData.description = description;
        return this;
    };
    QuestonDataBuilder.prototype.setCHoiceA = function (choiceA) {
        this.questionData.choiceA = choiceA;
        return this;
    };
    QuestonDataBuilder.prototype.setCHoiceB = function (choiceB) {
        this.questionData.choiceB = choiceB;
        return this;
    };
    QuestonDataBuilder.prototype.getResult = function () {
        return this.questionData;
    };
    return QuestonDataBuilder;
}());
exports.QuestonDataBuilder = QuestonDataBuilder;
//# sourceMappingURL=question.data.builder.js.map