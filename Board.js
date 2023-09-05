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
  constructor(boardPosition, terrainMapping) {
    this.gridContainer = document.querySelector(`.${boardPosition}`);
    this.gridWrapper = document.createElement("div");
    this.squareId = squareIdCounter;
    this.terrainMapping = terrainMapping; 

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
        // square.setAttribute("id", this.squareId);
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
    this.initializeBoard(); // Call the initializeBoard function
  }

  initializeBoard() {
    const squares = this.gridContainer.querySelectorAll(".grid-square");
    
    squares.forEach((square, i) => {
      const terrainType = Object.keys(this.terrainMapping).find(
        (terrain) => this.terrainMapping[terrain].includes(String(i))
      );
      
      square.classList.add(terrainType);
      square.setAttribute("data-is-bombable", terrainType === "dirt" || terrainType === "rock");
      square.setAttribute("data-is-drillable", terrainType === "dirt" || terrainType === "steel-plate");
    });
  }
}
