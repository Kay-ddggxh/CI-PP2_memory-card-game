// retrieve all Elements with class attr of "card"
const cards = document.querySelectorAll('.card');

// retrieve timer element
const timerEl = document.getElementById("timer");

// retrieve start btn element + add click event
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startTimer)


// manage flip state
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;


// store elapsed time from timer
let timerInterval;

// timer function
function startTimer() {
    // clear existing timer
    clearInterval(timerInterval);

    let seconds = 0;
    let minutes = 0;

    // set interval every 1000ms
    timerInterval = setInterval(function () {
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

// add event listener to each item of cards array
for (let card of cards) {
    card.addEventListener('click', flipCard)
}