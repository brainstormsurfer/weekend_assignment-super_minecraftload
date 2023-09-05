import { Board } from "./Board.js";
import { UIHandler } from "./UIHandler.js";

// Define a mapping between terrain types and class names
const terrainToClass = {
  "sp-red": ["0", "9"],
  "rock-draw2": ["1"],
  "adirt-gold": ["2", "18", "24"],
  "adirt-iron": ["3", "4", "8", "16", "19", "28", "31"],
  "sp-red-platinum": ["8"],
  "sp-red-iron": ["10"],
  "rock-draw1": ["12"],
  "sp-yellow-bomb": ["13"],
  "sp-blue": ["15"],
  "adirt-artifact": ["17", "29"],
  "rock": ["20"],
  "sp-blue-iron": ["22"],
  "sp-blue-platinum": ["23"],
  "adirt-platinum": ["25"],
  "adirt-bomb": ["26"],
};
const terrainToClass2 = {
  "sp-red": ["0", "9"],
  "rock-draw2": ["1"],
  "adirt-gold": ["2", "18", "24"],
  "adirt-iron": ["3", "4", "8", "16", "19", "28", "31"],
  "sp-red-platinum": ["8"],
  "sp-red-iron": ["10"],
  "rock-draw1": ["12"],
  "sp-yellow-bomb": ["13"],
  "sp-blue": ["15"],
  "adirt-artifact": ["17", "29"],
  "rock": ["20"],
  "sp-blue-iron": ["22"],
  "sp-blue-platinum": ["23"],
  "adirt-platinum": ["25"],
  "adirt-bomb": ["26"],
};
const terrainToClass3 = {
  "sp-red": ["0", "9"],
  "rock-draw2": ["1"],
  "adirt-gold": ["2", "18", "24"],
  "adirt-iron": ["3", "4", "8", "16", "19", "28", "31"],
  "sp-red-platinum": ["8"],
  "sp-red-iron": ["10"],
  "rock-draw1": ["12"],
  "sp-yellow-bomb": ["13"],
  "sp-blue": ["15"],
  "adirt-artifact": ["17", "29"],
  "rock": ["20"],
  "sp-blue-iron": ["22"],
  "sp-blue-platinum": ["23"],
  "adirt-platinum": ["25"],
  "adirt-bomb": ["26"],
};

document.addEventListener("DOMContentLoaded", () => {
  // Create an instance of the Board class with board numbers
  const board1 = new Board("grid-container-top", terrainToClass);
  const board2 = new Board("grid-container-bottom", terrainToClass);

  // Generate squares for both boards first
  board1.generateSquares(board1.gridWrapper, 1);
  board2.generateSquares(board2.gridWrapper, 2);

  // Create an instance of the UI class and pass the board instances
  const ui1 = new UIHandler(board1);
  const ui2 = new UIHandler(board2);

  // Initialize event listeners for both boards
  ui1.initialize();
  ui2.initialize();
});
