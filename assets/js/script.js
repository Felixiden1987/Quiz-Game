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
            { text: "Conceited", correct: false},
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
            { text: "we're contagius", correct: false },
            { text: "Entertain us", correct: true },
            { text: "We're strangers", correct: false },
            { text: "We're dangerous", correct: false },

        ]
    },
    {
        question: "Don't go chasin' waterfalls, listen to the ___ that you're used to?",
        answers: [
            { text: "Rivers and the streams", correct: true },
            { text: "Rivers and the seas", correct: false },
            { text: "Rivers and the trees", correct: false },
            { text: "Rivers and the lakes", correct: false },

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
 * variables for elements 
 */

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;



