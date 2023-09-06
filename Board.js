let isFirstBoard = true;
let squareIdCounter = 0;
let artifactsTaken = 0;

export class Board {
  constructor(boardPosition, terrainMapping, boardName) {
    this.boardName = boardName;
    this.gridContainer = document.querySelector(`.${boardPosition}`);
    this.gridWrapper = document.createElement("div");
    this.squareId = squareIdCounter;
    this.terrainMapping = terrainMapping;
    this.numRows = isFirstBoard ? 4 : 9;
    this.numCols = 8;
    this.initialize();
    this.boardState = this.initializeBoardState(); // Initialize the board state
  }

  initialize() {
    this.gridWrapper.classList.add("grid-wrapper");
    this.gridWrapper.innerHTML = "";
    this.gridContainer.appendChild(this.gridWrapper);
    this.createGrid(this.gridWrapper); // Create the grid squares
  }

  createGrid(wrapContainer) {
    if (isFirstBoard) {
      wrapContainer.style.height = "45%";
      isFirstBoard = false;
    } else {
      wrapContainer.style.height = "100%";
    }
    wrapContainer.style.setProperty("--cols", this.numCols);
    this.gridContainer.style.backgroundImage = `url('./images/${this.boardName}.jpg')`;

    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        const squareName = this.getTerrainType(row, col);
        const square = document.createElement("div");
        console.log("squareName", squareName);
        square.classList.add("grid-square", squareName);
        square.setAttribute("id", `${this.boardName.slice(-1)}-${row}-${col}`);
        wrapContainer.appendChild(square);
      }
    }
  }

  initializeBoardState() {
    const initialState = [];
    for (let row = 0; row < this.numRows; row++) {
      const rowState = [];
      for (let col = 0; col < this.numCols; col++) {
        const squareName = this.getTerrainType(row, col);
        console.log(squareName);
        const terrainType = squareName.split("-")[0];
        const isBombable = terrainType === "dirt" || terrainType === "rock";
        const isDrillable =
          terrainType === "dirt" || terrainType === "steelPlate";
        rowState.push({ terrain: terrainType, isBombable, isDrillable });
      }
      initialState.push(rowState);
    }
    return initialState;
  }

  getTerrainType(row, col) {
    const squareIndex = col + row * this.numCols;
    const squareName = String(squareIndex);
    const terrainType = Object.keys(this.terrainMapping).find((terrain) =>
      this.terrainMapping[terrain].includes(squareName)
    );
    // If no terrain type is found, default to "dirt"
    return terrainType || "dirt";
    // return this.extractTerrainType(terrainType || "dirt")
  }

  // Function to update the board state when multiple squares are drilled
//   updateBoardState(coordinates) {
//     coordinates.forEach(({ row, col }) => {
//       this.boardState[row][col] = {
//         terrain: "tunnel",
//         isBombable: false,
//         isDrillable: false,
//       };
//     });
//   }

//   // Function to update the visual representation of the affected squares
//   updateSquareVisual(squares) {
//     squares.forEach(({ row, col }) => {
//       const square = getSquareElement(row, col); // Implement this function to get the square element
//       square.className = "tunnel"; // Set the class to "tunnel" for all affected squares
//     });
//   }

//   // Method for bombing action with multiple squares
//   artifactsTakenCheck(squareCoordinates) {
//     squareCoordinates.forEach(({ row, col }) => {
//       const squareName = this.getTerrainType(row, col);
//       if (squareName.includes("artifact")) {
//         // Increment the artifact count
//         artifactsTaken++;
//       }
//       // Implement the rest of the bombing logic for each square here
//     });

//     if (artifactsTaken === 3) {
//       if (boardName === "board3") return this.endGame();

//       this.replaceBoards();
//     }
//   }

//   // Function to end the game
//   endGame() {
//     // Perform any necessary end-of-game actions
//     console.log("Game Over!");
//     // You can show a game-over message or handle any other game-ending logic here.

//     if (artifactsTaken === 3) {
//       if (boardName === "board3") {
//         this.endGame();
//       } else {
//         this.replaceBoards();
//       }
//     }
//   }// Function to replace boards

// replaceBoards() {
//   console.log("LALALA")
//   // Choose the appropriate board configuration based on game progress
//   let newBoardConfig;
//   if (artifactsTaken === 3) {
//     // Initialize board2 with squares when 3rd artifact is taken from board1
//     newBoardConfig = selectedBoardConfigs[2];
//   } else if (artifactsTaken === 6) {
//     // Switch positions of board2 and board3
//     swapBoardPositions();
//     // Initialize board3 with squares when 6th artifact is taken
//     newBoardConfig = selectedBoardConfigs[3];
//   } else {
//     // All artifacts found or other endgame conditions, the game should end
//     return;
//   }

//   // Create a new instance of the Board class with the new configuration
//   const newBoard = new Board("grid-container-bottom", newBoardConfig, "board3");

//   // Initialize event listeners for the new board
//   const newUI = new UIHandler(newBoard);
//   newUI.initialize();
// }

// // Function to switch positions of board2 and board3 in the DOM
// swapBoardPositions() {
//   const gridContainerTop = document.querySelector(".grid-container-top");
//   const gridContainerBottom = document.querySelector(".grid-container-bottom");
  
//   // Swap their positions in the DOM
//   gridContainerTop.parentNode.insertBefore(gridContainerBottom, gridContainerTop);
// }
}