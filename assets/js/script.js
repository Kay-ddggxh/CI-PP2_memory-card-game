//retrieve modal element
const modal = document.getElementById("modal");

// retrieve modal start game button
const modalStartBtn = document.getElementById("modal-start-btn");

// retrieve restart game button
const restartBtn = document.getElementById("restart-btn");

// retrieve player name element
const playerName = document.getElementById("player-name");

// retrieve player name input
const playerNameInput = document.getElementById("player-name-input");

// retrieve all Elements with class attr of "card"
const cards = document.querySelectorAll('.card');

// retrieve timer element
const timerEl = document.getElementById("timer");

// retrieve move counter element
const moveCounter = document.getElementById("move-counter");

// retrieve score element
const scoreEl = document.getElementById("score");

// retrieve best score element
const bestScoreEl = document.getElementById("best-score");

// retrieve all audio elements
const soundtrackEl = document.getElementById("soundtrack");
const audioToggle = document.getElementById("audio-toggle");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

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
// count matches to determine when game is finished
let matchCounter = 0;

// store scores
let bestScores = [];



/* MODAL FUNCTIONALITY
    source: https://www.youtube.com/watch?v=TAB_v6yBXIE&ab_channel=KevinPowell
*/

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
    modal.style.display = "none";
}

// End - modal functionality 

// calculate scores
function calcScore() {
    let score = Math.round((10000 - numMoves) / secCounter);
    // display current score 
    scoreEl.innerHTML = score;
    // store all scores in bestScore array
    bestScores.push(score);

    getBestScore();
}

// get and display highest number from bestScores array
function getBestScore() {
    // get highest value from bestScores array
    let maxScore = Math.max(...bestScores);

    bestScoreEl.innerHTML = maxScore;
}

/* TIMER FUNCTIONALITY
    source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/
*/

function startTimer() {
    // clear existing timer
    clearInterval(timerInterval);
    // resets second counter to 0
    secCounter = 0;

    let seconds = 0;
    let minutes = 0;

    // set interval every 1000ms
    timerInterval = setInterval(function () {
        // count seconds each interval
        secCounter++;

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
}

// END - Timer

/* MEMORY GAME FUNCTIONALITY
    source: https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
*/

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
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        secondCard = this;

        checkForMatch();
    }
}
// find matching cards
function checkForMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        // cards match
        matchCounter += 1;
        disableCards();
        if (matchCounter === (cards.length / 2)) {
            stopGame();
        }
    } else {
        // cards don't match
        unflipCards();
    }
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

// shuffle cards 
function shuffle() {
    for (let card of cards) {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    }
}

// render entire game
function startGame() {
    // shuffle cards
    shuffle();


    // render player name
    if (playerNameInput.value === "") {
        playerName.innerHTML = "Your";
    } else {
        playerName.innerHTML = `${playerNameInput.value}'s`;
    }

    closeModal();

    startTimer();

    // add event listener to each item of cards array
    for (let card of cards) {
        card.addEventListener('click', flipCard);
    }
    // reset move counter to 0
    numMoves = 0;
    moveCounter.innerHTML = numMoves;
}

// stop game > stops timer and stores time and score
function stopGame() {
    // stops timer from running
    clearInterval(timerInterval);

    calcScore();

    setTimeout(() => {
        restartBtn.style.display = "block";
    }, 1000);
}

// restart game

function restartGame() {
    // storing bestScores array in local storage
    localStorage.setItem("bestScores", JSON.stringify(bestScores)); // not working!!!

    //hide restart button
    restartBtn.style.display = "none";

    // flip all cards back again
    cards.forEach(card => card.classList.remove('flip'));

    // set matching cards to 0
    matchCounter = 0;

    // reset score to 0
    scoreEl.innerHTML = 0;
    startGame();
}

/* SOUNDTRACK ON/OFF TOGGLE
    source: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
*/

let isPlaying = false;
pauseIcon.style.display = "none";

function togglePlay() {
    if (isPlaying) {
        soundtrackEl.pause();
    } else {
        soundtrackEl.play();
    }
}

soundtrackEl.onplaying = function () {
    isPlaying = true;
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
};

soundtrackEl.onpause = function () {
    isPlaying = false;
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
};

audioToggle.addEventListener("click", togglePlay);

// END - soundtrack on/off toggle 

// modal button starts the game and timer
modalStartBtn.addEventListener("click", startGame);

// restart game button restarts game without reloading the page
restartBtn.addEventListener("click", restartGame);