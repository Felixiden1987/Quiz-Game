const questions = [
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },
        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },
        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
    {
        question: "What is love?",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },

        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;


function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}