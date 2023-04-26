const cards = document.querySelectorAll('.card')
console.log(cards)
let hasSelectedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let correctCount = 0;

function selCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('picked');

    if (!hasSelectedCard) {
        hasSelectedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.alumni === secondCard.dataset.alumni;
    isMatch ? disableCards() : unselCards();
}

function disableCards() {
    firstCard.classList.remove('picked');
    secondCard.classList.remove('picked');
    firstCard.classList.add('correct');
    secondCard.classList.add('correct');
    
    correctCount++;
    printCorrect();

    firstCard.removeEventListener('click', selCard);
    secondCard.removeEventListener('click', selCard);
    resetBoard();
}

function unselCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('picked');
        secondCard.classList.remove('picked');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasSelectedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function printCorrect() {
    if (correctCount != 5)  return;
    let text = document.getElementById("results");
    // console.log(text)
    text.style.color = "green";
    text.style.marginBottom = "5rem";
    text.innerHTML = "Well done! You got them all right!";
}

cards.forEach(card => card.addEventListener('click', selCard));