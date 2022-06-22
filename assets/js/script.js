// retrieve all Elements with class attr of "card"
const cards = document.querySelectorAll('.card');

// manage flip state
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;


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

// add event listener to each item of cards array
for (let card of cards) {
    card.addEventListener('click', flipCard)
}