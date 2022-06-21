// retrieve all Elements with class attr of "card"
const cards = document.querySelectorAll('.card');

// manage flip state
let hasFlippedCard = false;
let firstCard;
let secondCard;

function flipCard() {
    // this refers to respective div.card element
    this.classList.add('flip'); // append class of "flip" to all items of cards array

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
}

// add event listener to each item of cards array
for (let card of cards) {
    card.addEventListener('click', flipCard)
}