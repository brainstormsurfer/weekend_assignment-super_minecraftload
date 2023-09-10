
// import {initializeTeamCards} from './cards'; // Import the function

const teamColor = 'purple'; // Change this to 'white' if needed
const cards = initializeTeamCards(teamColor); // Initialize the cards

// Get a container element in your HTML where you want to display the cards

const marketRedCard = document.querySelector('.market-red');
const marketYellowCard = document.querySelector('.market-yellow');
const marketBlueCard = document.querySelector('.market-blue');
const marketMultiCard = document.querySelector('.market-multi');
const drawPileContainer = document.querySelectorAll('container-market-card');
const discardPileContainer = document.querySelectorAll('container-market-card');
const inHandContainer = document.querySelectorAll('.container-hand-card');
let inHandGridItem = 0


function addCardToDrawPile(card, index) {
    const cardElement = createCardElement(card);
    cardElement.style.top = `${index * 10}px`;
    drawPileContainer.appendChild(cardElement);
  }
  
  function addCardToMarketRed(card, index) {
    const cardElement = createCardElement(card);
    cardElement.style.top = `${index * 10}px`;
    marketRedCard.appendChild(cardElement);
  }

export default function initCards() {
      
      // Define similar functions for other piles
      
      // Iterate over the cards array and create UI elements
      cards.forEach((card, index) => {
        switch (card.cardStatus) {
          case '1': // Draw pile
            addCardToDrawPile(card, index);
            break;
          case '3': // In-hand
            // Handle in-hand logic here
            break;
          case '4': // Discard pile
            // Handle discard pile logic here
            break;
          case '5': // Market-red
            addCardToMarketRed(card, index);
            break;
          // Define similar cases for other piles
        }
      
        // Add event listeners or any other functionality as needed
        cardElement.addEventListener('click', () => {
          // Handle card click event here
          console.log(`Clicked on card with ID: ${card.id}`);
        });
      });
      
      function createCardElement(card) {
        const cardElement = document.createElement('img');
        cardElement.id = card.id;
        cardElement.className = 'card';
        cardElement.src = card.cardStatus === 1 ? card.backImage : card.frontImage;
        cardElement.alt = 'Card';
        cardElement.style.position = 'absolute';
        cardElement.style.zIndex = index;
        return cardElement;
      }
    }      

// import initializeTeamCards from './cards.js';

// export class UICardsHandler {
//     constructor() {
//         this.player1Cards =  initializeTeamCards("purple")
//         this.player2Cards = initializeTeamCards("white")

//         this.discardPile = []; // Discarded cards
//         this.playersHands = {}; // Cards held by players (key: player ID, value: array of cards)
//         this.inPlay = []; // Cards currently in play
//          this.cardIDCounter = 1;
//          // Initialize draw pile and discard pile
//         this.drawPile = []; // Initialize with all game cards
//         this.discardPile = [];
//         this.colorPile = []
//          // Initialize the market area for each player
//         this.market = {}; // Use an object to store market piles for each player
//         this.initializeMarket();
//     }

//   // Initialize the market area for each player
//   initializeMarket() {

//     const marketCards = document.querySelectorAll('.container-market-card .pilot-card')
//     for (marketCard of marketCards){

//     }

//     // Create cards with different costs ($10 to $25)
//     for (let cost = 10; cost <= 25; cost += 5) {
//       const card = new Card(color, cost, /* other card properties */);
//       colorPile.push(card);
//     }
    
//     return colorPile;
//   }

//   // Distribute initial 7 cards as the player's deck
//   distributeStarterCards(playerID) {
//     const starterDeck = [];
//     for (let i = 0; i < 7; i++) {
//       const card = this.drawCard();
//       starterDeck.push(card);
//     }
//     this.playersHands[playerID] = starterDeck;
//   }

//   // Draw an initial 4-card hand from the player's deck
//   drawInitialHand(playerID) {
//     const hand = [];
//     for (let i = 0; i < 4; i++) {
//       const card = this.drawCardFromDeck(playerID);
//       hand.push(card);
//     }
//     return hand;
//   }

//   // Draw a card from the player's deck
//   drawCardFromDeck(playerID) {
//     const deck = this.playersHands[playerID] || [];
//     if (deck.length === 0) {
//       return null; // Deck is empty
//     }
//     return deck.pop();
//   }
  
//   // Draw a card from the draw pile
//   drawCard() {
//     if (this.drawPile.length === 0) {
//       // Shuffle the discard pile into the draw pile if it's empty
//       this.shuffle(this.discardPile);
//       this.drawPile = this.discardPile;
//       this.discardPile = [];
//     }
//     return this.drawPile.pop();
//   }

// export function cardsGenerator(teamColor) {

// }

// export function marketCardsHandler(cards, teamColor) {
// }

// export function drawPileHandler(cards, teamColor) {
// }

// export function discardPileHandler(cards, teamColor) {
// }

// export function inHandCardsHandler(cards, teamColor) {
// }}