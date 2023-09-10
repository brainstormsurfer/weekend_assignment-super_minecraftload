class CardManager {
  constructor() {
    this.drawPile = [];
    this.discardPile = [];
    this.playersHands = {};
    this.marketPiles = {
      red: [],
      yellow: [],
      blue: [],
      multi: [],
    };
  

  // Initialize the draw pile with all the cards
  initializeDrawPile(cards) {
    this.drawPile = cards;
    this.shuffleDrawPile();
  }

  shuffleDrawPile() {
    for (let i = this.drawPile.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.drawPile[i], this.drawPile[j]] = [this.drawPile[j], this.drawPile[i]];
    }
  }

  // Draw a card from the draw pile
  drawCard(playerColor) {
    if (this.drawPile.length === 0) {
      // Shuffle the discard pile into the draw pile if it's empty
      this.shuffleDrawPile();
    }
    const card = this.drawPile.pop();
    this.addToPlayerHand(playerColor, card);
  }

  // Add a card to a player's hand
  addToPlayerHand(playerColor, card) {
    if (!this.playersHands[playerColor]) {
      this.playersHands[playerColor] = [];
    }
    this.playersHands[playerColor].push(card);
  }

  // Move a card from a player's hand to the discard pile
  discardCard(playerColor, card) {
    const playerHand = this.playersHands[playerColor];
    const cardIndex = playerHand.indexOf(card);
    if (cardIndex !== -1) {
      playerHand.splice(cardIndex, 1);
      this.discardPile.push(card);
    }
  }

  // Draw a card from the draw pile to a player's hand
  drawCardFromDeck(playerColor) {
    if (this.drawPile.length === 0) {
      // Shuffle the discard pile into the draw pile if it's empty
      this.shuffleDrawPile();
    }
    const card = this.drawPile.pop();
    this.addToPlayerHand(playerColor, card);
  }

  // Move a card from a player's hand to a market pile
  playCardToMarket(playerColor, cardStatus) {
    const playerHand = this.playersHands[playerColor];
    const cardIndex = playerHand.findIndex((card) => card.status === cardStatus);
    if (cardIndex !== -1) {
      const card = playerHand.splice(cardIndex, 1)[0];
      this.marketPiles[card.color].push(card);
    }
  }
}

export default CardManager;
