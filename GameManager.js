import { initializeTeamCards } from './cards'; // Provide the correct path to your cards.js file

class GameManager {
    constructor() {
      this.players = []; // Store player objects
      this.cardManager = new CardManager(); // Your CardManager class
    }
  
    initializeGame() {

    const purpleTeam = initializeTeamCards("purple");
    // const whiteTeam = cards.initializeTeamCards("white"); 
    
        console.log('purple team' , purpleTeam)
        // console.log(purpleTeam)



      // Create and shuffle the market cards
      const marketCards = [];
      // Add instances of Card to marketCards with appropriate attributes
  
      // Shuffle the market cards
      this.shuffle(marketCards);
  
      // Distribute starter cards to each player
      for (const player of this.players) {
        // Draw 7 starter cards from the market
        const playerDeck = [];
        for (let i = 0; i < 7; i++) {
          if (marketCards.length === 0) {
            // Handle case when the market cards run out (if needed)
            // You can reshuffle the discard pile into the draw pile
            // and continue drawing cards.
          }
          const drawnCard = marketCards.pop();
          playerDeck.push(drawnCard);
        }
  
        // Move 4 cards to the player's hand
        const playerHand = playerDeck.splice(0, 4);
  
        // Set the player's initial hand and draw pile
        player.setHand(playerHand);
        player.setDrawPile(playerDeck);
      }
  
      // Setup the market piles
      this.setupMarketPiles(marketCards);
    }
  
    // Implement the shuffle method here
  
    setupMarketPiles(marketCards) {
      // Divide marketCards into color piles (red, yellow, blue, joker)
      const colorPiles = {
        red: [],
        yellow: [],
        blue: [],
        joker: [],
      };
  
      // Categorize cards into color piles based on their color attribute
      for (const card of marketCards) {
        colorPiles[card.color].push(card);
      }
  
      // Sort cards within each color pile by cost (ascending)
      for (const pile in colorPiles) {
        colorPiles[pile].sort((a, b) => a.cost - b.cost);
      }
  
      // Place color piles with cheapest cards on top in the market
      // You may need to implement a method to add piles to the market in your CardManager class
      for (const pile in colorPiles) {
        const pileCards = colorPiles[pile];
        this.cardManager.addToMarket(pileCards);
      }
    }
  }