export class Question {

    /**
     * 
     * @param {String} text this is the text of a question 
     * @param {String[]} choices this are choices of the question
     * @param {String} answer the answer of the question
     * 
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {String} choice Some text to guess
     * @returns {boolean} returns true if the answer is correct
     */


    correctAnswer(choice) {
        return choice === this.answer
    }

}
