// retrieve all Elements with class attr of "card"
const cards = document.querySelectorAll('.card');
console.log(cards);

function flipCard() {
    console.log("card flipped");
    this.classList.toggle('flip'); // append class of "flip" to all items of cards array
}

// add event listener to each item of cards array
for (let card of cards) {
    card.addEventListener('click', flipCard)
}