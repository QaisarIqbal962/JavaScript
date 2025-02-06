const questions = [
    {
        question: "Which is the largest animals in the world ?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },

    {
        question: "Which is the largest desert in the world ?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },

    {
        question: "Which is the smallest continent in the world ?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },

    {
        question: "What is the capital city of pakistan ?",
        answer: [
            { text: "Lahore", correct: false },
            { text: "Peshawar", correct: false },
            { text: "Islamabad", correct: true },
            { text: "Karachi", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById(answer - button);
const nextButton = document.getElementById(next - btn);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.array.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button)
    });

}