import { QuestionData } from '../question.data';

export class QuestonDataBuilder{
	questionData : QuestionData;

	setQuestionId(questionId: number): this{
		this.questionData.questionId = questionId;
		return this;
	}

	setDescription(description: string): this{
		this.questionData.description = description;
		return this;
	}

	setCHoiceA(choiceA: string): this{
		this.questionData.choiceA = choiceA;
		return this;
	}

	setCHoiceB(choiceB: string): this{
		this.questionData.choiceB = choiceB;
		return this;
	}

	getResult(): QuestionData{
		return this.questionData;
	}

}