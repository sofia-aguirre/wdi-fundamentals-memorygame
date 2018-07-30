var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  },
];
var cardsInPlay = [];

var checkForMatch = function() {
  cardId.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  //cardId.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
  console.log("You flipped: " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        cardElement.appendChild('game-board');
    }
};

createBoard();

//flipCard(0);
//flipCard(2);

// cardsInPlay here from line 37

//copied into flipCard at lines 38, 39
//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);


/* This used to sit inside the flipCard function. Hopefully I didn't break anything:

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    }
    else {
    alert("Please try again.");
    }
  }
*/
