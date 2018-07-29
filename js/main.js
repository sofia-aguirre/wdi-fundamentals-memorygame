var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }
};

var flipCard = function(cardId) {
  checkForMatch();
  console.log("You flipped: " + cards[cardId]);
};

//flipCard(0);
//flipCard(2);

cardsInPlay.push(cards[cardId]);


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
