export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text Question to render
     */
    showQuestion(text){ 
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices The choices of the question
     */
    showchoices(choices, callbaack){
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''

        for ( let i = 0; i < choices.length; i++){
            const btn = document.createElement("button");
            btn.innerText = choices[i];
            btn.className = 'button'
            btn.addEventListener('click', () => callbaack(choices[i]))

            choicesContainer.append(btn);
        }
    }

    /**
     * 
     * @param {number} score total score
     */
    showScores( score ){
        const quizEndhtml = `
        <h1>Result</h1>
        <h2>Your Score: ${score}</h2>`

        const element = document.getElementById('quiz')
        element.innerHTML = quizEndhtml
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total total questions number
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML = `question ${currentIndex} of ${total}`
    }
}