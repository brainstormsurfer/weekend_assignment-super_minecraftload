import { Board } from "./Board.js";
import { UIHandler } from "./UIHandler.js";
import { Player } from "./Player.js";
import { CardManager } from "./CardManager.js";
import { Card } from "./Card.js";

// Define a mapping between terrain types and class names
const board1a = {
  "steelPlate-red": ["0", "9"],
  "rock-draw2": ["1"],
  "dirt-gold": ["2", "18", "24"],
  "dirt-iron": ["3", "4", "8", "16", "19", "28", "31"],
  "steelPlate-red-platinum": ["8"],
  "steelPlate-red-iron": ["10"],
  "rock-draw1": ["12"],
  "steelPlate-yellow-bomb": ["13"],
  "steelPlate-blue": ["15"],
  "dirt-artifact": ["17", "29"],
  "rock": ["20"],
  "steelPlate-blue-iron": ["22"],
  "steelPlate-blue-platinum": ["23"],
  "dirt-platinum": ["25"],
  "dirt-bomb": ["26"],
};

const board2a = {
  "steelPlate-red": ["0", "9"],
  "rock-draw2": ["1"],
  "dirt-gold": ["2", "18", "24"],
  "dirt-iron": ["3", "4", "8", "16", "19", "28", "31"],
  "steelPlate-red-platinum": ["8"],
  "steelPlate-red-iron": ["10"],
  "rock-draw1": ["12"],
  "steelPlate-yellow-bomb": ["13"],
  "steelPlate-blue": ["15"],
  "dirt-artifact": ["17", "29"],
  "rock": ["20"],
  "steelPlate-blue-iron": ["22"],
  "steelPlate-blue-platinum": ["23"],
  "dirt-platinum": ["25"],
  "dirt-bomb": ["26"],
};

const board3a = {
  "steelPlate-red": ["0", "9"],
  "rock-draw2": ["1"],
  "dirt-gold": ["2", "18", "24"],
  "dirt-iron": ["3", "4", "8", "16", "19", "28", "31"],
  "steelPlate-red-platinum": ["8"],
  "steelPlate-red-iron": ["10"],
  "rock-draw1": ["12"],
  "steelPlate-yellow-bomb": ["13"],
  "steelPlate-blue": ["15"],
  "dirt-artifact": ["17", "29"],
  "rock": ["20"],
  "steelPlate-blue-iron": ["22"],
  "steelPlate-blue-platinum": ["23"],
  "dirt-platinum": ["25"],
  "dirt-bomb": ["26"],
};

document.addEventListener("DOMContentLoaded", () => {
  // Create an instance of the Board class with board numbers
  const board1 = new Board("grid-container-top", board1a, "board1");
  const board2 = new Board("grid-container-bottom", board2a, "board2");

  // ?Generate squares for both boards first
  // board1.generateSquares(board1.gridWrapper, 1);
  // board2.generateSquares(board2.gridWrapper, 2);

  // Create an instance of the UI class and pass the board instances
  const ui1 = new UIHandler(board1);
  const ui2 = new UIHandler(board2);

  // Initialize event listeners for both boards
  ui1.initialize();
  ui2.initialize();
});

// Create instances of your classes
const player = new Player(1);
const cardManager = new CardManager();

// Set up test data
const card = new Card("red", 12, /* other card properties */);
player.money = 15; // Player has enough money to purchase the card
card.mineralInventory = {
  iron: 6,
  gold: 8,
};

// Call the method you want to test
player.purchaseCard(card, card.cost);

// Check the results
console.log("Player's money after purchase:", player.money); // Should be 3
console.log("Player's mineral inventory after purchase:", player.mineralInventory); // Should be empty
// Check any other properties or conditions you want to test