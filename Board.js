let isFirstBoard = true;
let squareIdCounter = 0;

const MineralType = {
  IRON: "iron",
  GOLD: "gold",
  PLATINUM: "platinum",
  EMERALD: "emerald",
  RUBY: "ruby",
  DIAMOND: "diamond",
};

function getMineralValue(mineralType) {
  // Define mineral values and return the value based on the mineral type
  const mineralValues = {
    [MineralType.IRON]: 2,
    [MineralType.GOLD]: 3,
    [MineralType.PLATINUM]: 5,
    [MineralType.EMERALD]: 8,
    [MineralType.RUBY]: 10,
    [MineralType.DIAMOND]: 12,
  };
  return mineralValues[mineralType];
}

export class Board {
  constructor(boardPosition) {
    this.gridContainer = document.querySelector(`.${boardPosition}`);
    this.gridWrapper = document.createElement("div");
    this.squareId = squareIdCounter;
    this.initialize();
  }

  initialize() {
    this.gridWrapper.classList.add("grid-wrapper");
    this.gridWrapper.innerHTML = "";
    this.gridContainer.appendChild(this.gridWrapper);
  }

  createGrid(rows, cols, wrapContainer) {
    if (rows === 4) {
      wrapContainer.style.height = "45%";
    } else {
      wrapContainer.style.height = "100%";
    }

    wrapContainer.style.setProperty("--cols", cols);

    for (let i = 0; i < rows * cols; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      if (!square.id) {
        square.setAttribute("id", this.squareId);
        //! for dev purpose - TO DELETE:
        square.textContent = squareIdCounter;
        squareIdCounter++;
      }
      wrapContainer.appendChild(square);
    }
  }

  generateSquares(container, boardNumber) {
    container.id = boardNumber;
    if (!isFirstBoard) {
      this.createGrid(9, 8, container);
      this.gridContainer.style.backgroundImage = `url('./images/board-empty-${boardNumber}.jpg')`;
    } else {
      this.gridContainer.style.backgroundImage = `url('./images/board-empty-${boardNumber}.jpg')`;
      this.createGrid(4, 8, container);
      isFirstBoard = false;
    }
    this.initialSquareGenerator(container);
  }

  initialSquareGenerator(board) {
    console.log(board.id);
    const squares = board.querySelectorAll(".grid-square");
    if (board.id === "1") {
      squares.forEach((square, i) => {
        switch (i) {
          case 0:
          case 9: {
            square.classList.add("sp-red");
            square.setAttribute("data-card-type", "sp-red");
            break;
          }
          case 1: {
            square.classList.add("rock-draw2");
            square.setAttribute("data-card-type", "rock-draw2");
            break;
          }
          case 2:
          case 3:
          case 18:
          case 24: {
            square.classList.add("adirt-gold");
            square.setAttribute("data-card-type", "adirt-gold");
            break;
          }
          case 3:
          case 4:
          case 8:
          case 16:
          case 19:
          case 28:
          case 31: {
            square.classList.add("adirt-iron");
            square.setAttribute("data-card-type", "adirt-iron");
            break;
          }
          case 8: {
            square.classList.add("sp-red-platinum");
            square.setAttribute("data-card-type", "sp-red-platinum");
            break;
          }
          case 10: {
            square.classList.add("sp-red-iron");
            square.setAttribute("data-card-type", "sp-red-iron");
            break;
          }
          case 12: {
            square.classList.add("rock-draw1");
            square.setAttribute("data-card-type", "rock-draw1");
            break;
          }
          case 13: {
            square.classList.add("sp-yellow-bomb");
            square.setAttribute("data-card-type", "sp-yellow-bomb");
            break;
          }
          case 15: {
            square.classList.add("sp-blue");
            square.setAttribute("data-card-type", "sp-blue");
            break;
          }
          case 17:
          case 29: {
            square.classList.add("adirt-artifact");
            square.setAttribute("data-card-type", "adirt-artifact");
            break;
          }
          case 20: {
            square.classList.add("rock");
            square.setAttribute("data-card-type", "rock");
            break;
          }
          case 22: {
            square.classList.add("sp-blue-iron");
            square.setAttribute("data-card-type", "sp-blue-iron");
            break;
          }
          case 23: {
            square.classList.add("sp-blue-platinum");
            square.setAttribute("data-card-type", "sp-blue-platinum");
            break;
          }
          case 25: {
            square.classList.add("adirt-platinum");
            square.setAttribute("data-card-type", "adirt-platinum");
            break;
          }
          case 26: {
            square.classList.add("adirt-bomb");
            square.setAttribute("data-card-type", "adirt-bomb");
            break;
          }
          default:
            square.classList.add("adirt");
            square.setAttribute("data-card-type", "adirt");
        }
      });
    }
  }


    // Separate concerns: Handle drilling square
    drillSquare(square) {
      if (this.isInvalidSquare(square)) {
        return;
      }
  
      const terrainType = this.getSquareTerrainType(square);
  
      if (this.isSquareDrillable(square, terrainType)) {
        // Handle drilling logic
      } else if (this.isSquareBombable(square, terrainType)) {
        // Handle bombing logic
      } else {
        console.log("This square cannot be drilled or bombed.");
      }
    }
  isInvalidSquare(square) {
    const isTunnel = square.getAttribute("data-mineral-type") === "tunnel";
    const isSteelPlate = square.classList.contains("steel-plate");

    if (
      isTunnel ||
      (isSteelPlate && !this.matchesDrillingIcons(square, drillingIcons))
    ) {
      console.log("This square cannot be drilled or bombed.");
      return true;
    }

    return false;
  }
  // Separate concerns: Handle drilling
  isSquareDrillable(square, terrainType) {
    // Check if the square can be drilled
  }

  // Separate concerns: Handle bombing
  isSquareBombable(square, terrainType) {
    // Check if the square can be bombed
  }

  bombSquare(square, bombingPattern, player) {
    // Check if the square is a tunnel (already used) or a steel plate (not matching drill icons)
    if (this.isInvalidSquare(square)) {
      return;
    }

    // Check if the player has at least one bomb token
    if (!(player.bombTokens > 0)) {
      console.log("You don't have enough bomb tokens.");
      return;
    }

    // Validate that the bombing pattern matches the adjacent squares
    const validBombTargets = this.getValidBombTargets(square, bombingPattern);

    if (validBombTargets.length === 0) {
      console.log("Invalid bombing pattern for this square.");
      return;
    }

    // Apply the bombing effect on the valid bomb targets
    validBombTargets.forEach((target) => {
      // Handle removing minerals from the target square if necessary
      // Replace the square's content with a tunnel
      target.classList.remove("mineral-type"); // Remove the mineral class
      target.setAttribute("data-mineral-type", "tunnel");
    });

    // Deduct one bomb token from the player's supply
    player.bombTokens--;

    console.log("Bombing successful!");
  }

  matchesDrillingIcons(square, drillingIcons) {
    // Assuming drillingIcons is an array of valid colors (e.g., ["red", "blue", "yellow"])
    const squareColor = square.getAttribute("data-color"); // Replace with the actual attribute name

    // Check if the square's color matches any of the drilling icons' colors
    return drillingIcons.includes(squareColor);
  }

}
