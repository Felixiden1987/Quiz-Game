/**
 * Code from Greatstack, see readme.md
 */
/**
 * Questions for the quiz
 */

const questions = [
    {
        question: "What is love? ___",
        answers: [
            { text: "Baby don't hurt me", correct: true },
            { text: "Baby u hurt me", correct: false },
            { text: "Baby you hurt me", correct: false },
            { text: "Baby just hurt me", correct: false },
        ]
    },
    {
        question: "Never gonna ___ ?",
        answers: [
            { text: "Give you up", correct: false },
            { text: "Let you down", correct: false },
            { text: "Tell a lie", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "I said maybe, you're gonna be the one that ___ ?",
        answers: [
            { text: "Dates", correct: false },
            { text: "Loves", correct: false },
            { text: "Shaves", correct: false },
            { text: "Saves", correct: true },

        ]
    },
    {
        question: "You are ___ ?",
        answers: [
            { text: "Desire", correct: false },
            { text: "A liar", correct: false },
            { text: "My fire", correct: true },
            { text: "In a choir", correct: false },

        ]
    },
    {
        question: "I really, really, really wanna ___ ?",
        answers: [
            { text: "Zig a zig ah", correct: true },
            { text: "Zig a zig zah", correct: false },
            { text: "Zig a zag ah", correct: false },
            { text: "Zig a zig now", correct: false },

        ]
    },
    {
        question: "You're simply the best, better than all the rest, better than ___ ?",
        answers: [
            { text: "Everyone", correct: false },
            { text: "Anyone", correct: true },
            { text: "Havin' fun", correct: false },
            { text: "Someone", correct: false },

        ]
    },
    {
        question: "Tommy used to work ___ ?",
        answers: [
            { text: "On the docks", correct: true },
            { text: "On the cars", correct: false },
            { text: "At the bar", correct: false },
            { text: "At the barn", correct: false },

        ]
    },
    {
        question: "Dancing queen, feel the beat from the ___ ?",
        answers: [
            { text: "Quarantine", correct: false },
            { text: "Funky Scene", correct: false },
            { text: "Tambourine", correct: true },
            { text: "Skinny Jeans", correct: false },

        ]
    },
    {
        question: "Do you remember the ___ night of September?",
        answers: [
            { text: "Very First", correct: false },
            { text: "21st", correct: true },
            { text: "23rd", correct: false },
            { text: "24th", correct: false },

        ]
    },
    {
        question: "I love rock 'n roll, just put another ___ in the jukebox baby?",
        answers: [
            { text: "Dime", correct: true },
            { text: "Buck", correct: false },
            { text: "Coin", correct: false },
            { text: "Penny", correct: false },

        ]
    },
    {
        question: "Beat it, beat it, beat it, beat it, noone want's to be ___ ?",
        answers: [
            { text: "Conceited", correct: false },
            { text: "Deleted", correct: false },
            { text: "Unseated", correct: false },
            { text: "Defeated", correct: true },

        ]
    },
    {
        question: "Oh, i wanna dance with somebody, i wanna feel the ___ with somebody?",
        answers: [
            { text: "Heat", correct: true },
            { text: "Seat", correct: false },
            { text: "Meat", correct: false },
            { text: "Treat", correct: false },

        ]
    },
    {
        question: "Here we are now ___ ?",
        answers: [
            { text: "We're contagius", correct: false },
            { text: "Entertain us", correct: true },
            { text: "We're strangers", correct: false },
            { text: "We're dangerous", correct: false },

        ]
    },
    {
        question: "Don't go chasin' waterfalls, listen to the ___ that you're used to?",
        answers: [
            { text: "Rivers and the streams", correct: false },
            { text: "Rivers and the seas", correct: false },
            { text: "Rivers and the trees", correct: false },
            { text: "Rivers and the lakes", correct: true },

        ]
    },
    {
        question: "Hold me closer, Tiny Dancer?, count the ___ on the highway",
        answers: [
            { text: "Street lights", correct: false },
            { text: "Headlights", correct: true },
            { text: "Bar-fights", correct: false },
            { text: "Car-lights", correct: false },

        ]
    },
];

/**
 * Variables for quiz elements 
 */

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");
const timerElement = document.getElementById("timer");

/**
 * Question index starts at 0, score is set to 0
 */
let currentQuestionIndex = 0;
let score = 0;
let timer;

/**
 * Function to start the quiz
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
/**
 * Displays question 
 */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    startTimer(20);
    /**
     * Displays answers
     */
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}
/**
 * Starts a countdown timer
 */
function startTimer(duration) {
    let timeRemaining = duration;
    timerElement.innerHTML = `Time remaining: ${timeRemaining} seconds`;

    timer = setInterval(() => {
        timeRemaining--;
        timerElement.innerHTML = `Time remaining: ${timeRemaining} seconds`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            /**
             * Automatically select the answer as incorrect after time runs out 
             */ 
            selectAnswerAutomatically();
        }
    }, 1000);
}
/**
 * Automatically selects an answer if the time runs out
 */
function selectAnswerAutomatically() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
    alert("Time's up! Moving to the next question.");
    /** 
     * Move to the next question
     */
    handleNextButton();  
    
}
/**
 * Clears previous question
 */
function resetState() {
    nextButton.style.display = "none";
    /**
     * Clear the timer when resetting state
     */
    clearInterval(timer); 
    /**
     * Clear the timer display
     */
    timerElement.innerHTML = '';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/**
 * Stores users correct/incorrect answers 
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    /**
     * Clear the timer when an answer is selected
     */
    clearInterval(timer);
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    /**
     * Displays correct answer in green even if answer is incorrect
     */
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    /**
     * Shows next button after user has clicked on a answer
     */
    nextButton.style.display = "block";
}
/**
 * Shows your score after finishing all questions
 */
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    /**
     * Shows try again button when questions are finished
     */
    nextButton.innerHTML = "Try again?";
    nextButton.style.display = "block";
}
/**
 * If there is another question, it will be displayed or else the score will show
 */
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

/**
 * Calls the function to start quiz
 */
startQuiz();


