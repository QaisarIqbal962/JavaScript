const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    },
    {
        question: "What is the capital city of Pakistan?",
        answer: [
            { text: "Lahore", correct: false },
            { text: "Peshawar", correct: false },
            { text: "Islamabad", correct: true },
            { text: "Karachi", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button"); // Corrected ID  
const nextButton = document.getElementById("next-btn"); // Corrected ID  

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]; // Corrected from 'question' to 'questions'  
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButton.innerHTML = ""; // Clear previous answers  
    currentQuestion.answer.forEach(answer => { // Corrected from 'answer.array' to 'answer'  
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.onclick = () => selectAnswer(answer); // Added click event  
        answerButton.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {

        questionElement.innerHTML = `Quiz finished! Your score: ${score}/${questions.length}`;
        answerButton.innerHTML = "";
        nextButton.style.display = "none";
    }
}
s
startQuiz();