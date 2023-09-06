// so I think of focusing now in the cards mechanism,and I made a card manager class which roughly look like this:card class will be =
import { Card } from "./Card.js";

export class CardManager {
    constructor() {
      this.discardPile = []; // Discarded cards
      this.playersHands = {}; // Cards held by players (key: player ID, value: array of cards)
      this.inPlay = []; // Cards currently in play
       this.cardIDCounter = 1;
       // Initialize draw pile and discard pile
    this.drawPile = []; // Initialize with all game cards
    this.discardPile = [];

    // Initialize the market area for each player
    this.market = {}; // Use an object to store market piles for each player
    this.initializeMarket();
  }

  // Initialize the market area for each player
  initializeMarket() {
    const playerColors = ["red", "yellow", "blue", "joker"];
    
    for (const playerID in playerColors) {
      const playerColor = playerColors[playerID];
      // Create and shuffle a pile of cards for the player's color
      const colorPile = this.createColorPile(playerColor);
      
      // Add the color pile to the market for the player
      this.market[playerID] = colorPile;
    }
  }

  // Create a pile of cards for a given color
  createColorPile(color) {
    const colorPile = [];
    
    // Create cards with different costs ($10 to $25)
    for (let cost = 10; cost <= 25; cost += 5) {
      const card = new Card(color, cost, /* other card properties */);
      colorPile.push(card);
    }
    
    return colorPile;
  }

  // Distribute initial 7 cards as the player's deck
  distributeStarterCards(playerID) {
    const starterDeck = [];
    for (let i = 0; i < 7; i++) {
      const card = this.drawCard();
      starterDeck.push(card);
    }
    this.playersHands[playerID] = starterDeck;
  }

  // Draw an initial 4-card hand from the player's deck
  drawInitialHand(playerID) {
    const hand = [];
    for (let i = 0; i < 4; i++) {
      const card = this.drawCardFromDeck(playerID);
      hand.push(card);
    }
    return hand;
  }

  // Draw a card from the player's deck
  drawCardFromDeck(playerID) {
    const deck = this.playersHands[playerID] || [];
    if (deck.length === 0) {
      return null; // Deck is empty
    }
    return deck.pop();
  }
  
  // Draw a card from the draw pile
  drawCard() {
    if (this.drawPile.length === 0) {
      // Shuffle the discard pile into the draw pile if it's empty
      this.shuffle(this.discardPile);
      this.drawPile = this.discardPile;
      this.discardPile = [];
    }
    return this.drawPile.pop();
  }
}
    