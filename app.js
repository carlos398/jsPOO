import {newQuestions} from "./data/questions.js"
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz Quiz object
 * @param {UI} ui UI
 */
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score)
    }
    else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showchoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    }
}

function main() {
    const quiz = new Quiz(newQuestions);
    const ui = new UI();
    
    renderPage(quiz, ui);
}

main()