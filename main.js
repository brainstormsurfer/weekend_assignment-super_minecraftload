import { Board } from "./Board.js";
import { initializeTeamCards } from './cards.js';
import { board1a, board2a, board3a } from './boards.js';

const player1Cards = initializeTeamCards("purple")
// const player2Cards = initializeTeamCards("white")
console.log(player1Cards);



document.addEventListener("DOMContentLoaded", () => {
  // Create an instance of the Board class with board numbers
  const board1 = new Board("grid-container-top", board1a, "board1");
  const board2 = new Board("grid-container-bottom", board2a, "board2");

  // ?Generate squares for both boards first

});

