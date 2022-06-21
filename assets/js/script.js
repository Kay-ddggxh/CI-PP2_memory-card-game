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

    // this refers to respective div.card element
    this.classList.add('flip'); // append class of "flip" to all items of cards array

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

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
}

//turn unmatching cards back after 1.5s
function unflipCards() {

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}

// add event listener to each item of cards array
for (let card of cards) {
    card.addEventListener('click', flipCard)
}