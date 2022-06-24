// retrieve all Elements with class attr of "card"
const cards = document.querySelectorAll('.card');

// retrieve timer element
const timerEl = document.getElementById("timer");

// retrieve start btn element + add click event
const startBtn = document.getElementById("start-btn");

// retrieve move counter element
const moveCounter = document.getElementById("move-counter");

// retrieve score element
const scoreEl = document.getElementById("score");

// retrieve best score element
const bestScoreEl = document.getElementById("best-score");

// retrieve test div
const testEl = document.getElementById("test");

// retrieve stop btn element
const stopBtn = document.getElementById("stop-btn");



// manage flip state
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;


// store elapsed time from timer
let timerInterval;
// second counter for score calculation
let secCounter = 0;
// store number of moves
let numMoves = 0;

// store scores
let bestScores = [];

// calculate scores
function calcScore() {
    let score = Math.round((10000 - numMoves) / secCounter);
    // displays current score 
    scoreEl.innerHTML = score;
    // stores all scores in bestScore array
    bestScores.push(score);

    getBestScore();
};

// gets and displays highest number from bestScores array
function getBestScore() {
    let maxScore = bestScores[0];

    for (let i = 0; i < bestScores.length; i++) {
        if (maxScore < bestScores[i]) {
            maxScore = bestScores[i];
        }
    }

    bestScoreEl.innerHTML = maxScore;

}

// timer function
function startTimer() {
    // clear existing timer
    clearInterval(timerInterval);
    // resets second counter to 0
    secCounter = 0;

    let seconds = 0;
    let minutes = 0;
    // stores time ellapsed during round
    let time;

    // set interval every 1000ms
    timerInterval = setInterval(function () {
        // count seconds each interval
        secCounter++;
        testEl.innerHTML = secCounter - 1;

        // 2-digit representation
        timerEl.innerHTML =
            (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

        seconds++;

        // increment minutes after 60s, reset seconds
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
    }, 1000);
};

function flipCard() {
    // count moves
    numMoves++;
    moveCounter.innerHTML = numMoves;

    // prevent more than 2 cards from flipping at the same time
    if (lockBoard) return;
    // check if current clicked card is equal to first card
    if (this === firstCard) return;

    // this refers to respective div.card element
    this.classList.add('flip'); // append class of "flip" to all items of cards array

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}
// find matching cards
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }

    unflipCards();
}

// prevent matched cards from unflipping
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

//turn unmatching cards back after 1.5s
function unflipCards() {

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

// reset firstCard and secondCard after each round
function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

// shuffle cards when loading using IIFE
(function shuffle() {
    for (let card of cards) {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    };
})();

// render entire game
function startGame() {
    // reset move counter to 0
    numMoves = 0;

    startTimer();
}

// stop game > stops timer and stores time and score
function stopGame() {
    // stops timer from running
    clearInterval(timerInterval);

    calcScore();

}

// add event listener to each item of cards array
for (let card of cards) {
    card.addEventListener('click', flipCard)
}

// if all cards flipped > run stopGame()

// for (let card of cards) {
//     if (card.classList.contains("flip")) {
//         stopGame();
//     }
// }


// add event listener to start button
startBtn.addEventListener("click", startGame)

// add event listener to stop button
stopBtn.addEventListener("click", stopGame)


// soundtrack on/off toggle

const soundtrackEl = document.getElementById("soundtrack");
const audioToggle = document.getElementById("audio-toggle");

const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
let isPlaying = false;
pauseIcon.style.display = "none";

function togglePlay() {
    isPlaying ? soundtrackEl.pause() : soundtrackEl.play();
}

soundtrackEl.onplaying = function () {
    isPlaying = true;
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
}
soundtrackEl.onpause = function () {
    isPlaying = false;
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
}
audioToggle.addEventListener("click", togglePlay);