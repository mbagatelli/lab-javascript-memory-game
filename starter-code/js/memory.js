class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // Add the rest of the properties here
  }

  shuffleCards() {
    this.cards.sort( () => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    // ...
  }

  isFinished() {
    // ...
  }
}
