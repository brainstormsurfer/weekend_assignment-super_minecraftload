// import { Player } from "./Player.js";
// import { CardManager } from "./CardManager.js";
// import { Card } from "./Card.js";
// import { initializeTeamCards } from './cards.js';
// import { UIHandler } from "./UIHandler.js";
import initializeTeamCards from './cards.js';
import { board1a, board2a, board3a } from './boards.js';

const player1Cards = initializeTeamCards("purple")
const player2Cards = initializeTeamCards("white")

import { Board } from "./Board.js";

document.addEventListener("DOMContentLoaded", () => {
  // Create an instance of the Board class with board numbers
  const board1 = new Board("grid-container-top", board1a, "board1");
  const board2 = new Board("grid-container-bottom", board2a, "board2");

  // ?Generate squares for both boards first
  // board1.generateSquares(board1.gridWrapper, 1);
  // board2.generateSquares(board2.gridWrapper, 2);

  // Create an instance of the UI class and pass the board instances
  // const ui1 = new UIHandler(board1);
  // const ui2 = new UIHandler(board2);

  // Initialize event listeners for both boards
  // ui1.initialize();
  // ui2.initialize();
});

// // Create instances of your classes
// const player = new Player(1);
// const cardManager = new CardManager();

// // Set up test data
// const card = new Card("red", 12, 2, "draw1", "bombToken", 2);
// player.money = 15; // Player has enough money to purchase the card
// card.mineralInventory = {
//   iron: 6,
//   gold: 8,
// };

// // Call the method you want to test
// player.purchaseCard(card);

// // Check the results
// console.log("Player's money after purchase:", player.money); // Should be 3
// console.log("Player's mineral inventory after purchase:", player.mineralInventory); // Should be empty
// // Check any other properties or conditions you want to test
// console.log("purchaseCard", player.purchaseCard(card)); // Should be empty

