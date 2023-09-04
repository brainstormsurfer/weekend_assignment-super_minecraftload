import { Board } from './Board.js';
import { UIHandler } from './UIHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  // Create an instance of the Board class with board numbers
  const board1 = new Board("grid-container-top");
  const board2 = new Board("grid-container-bottom");

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
