export class UIHandler {
      constructor(board, patternValidator) {
        this.board = board;
        this.patternValidator = patternValidator;
      }
      // Handle player's drilling action
      handleDrillingAction(selectedSquares, icons) {
        // Validate the drilling pattern using the patternValidator
        if (this.patternValidator.validateDrillingPattern(selectedSquares, icons)) {
          // Execute the drilling action
          // Update the board state and UI as needed
        } else {
          // Display an error message to the player
        }
      }
    
      // Handle player's bombing action
      handleBombingAction(selectedSquares, bomberCard) {
        // Validate the bombing pattern using the patternValidator
        if (this.patternValidator.validateBombingPattern(selectedSquares, bomberCard)) {
          // Execute the bombing action
          // Update the board state and UI as needed
        } else {
          // Display an error message to the player
        }
      }
    

    initialize() {
      // Attach event listeners for different elements
      this.attachSquareClickListeners();
      this.attachSupplyClickListeners();
      this.attachCardClickListeners();
      this.attachBoardClickListeners();
    }
  
    attachSquareClickListeners() {
      const squares = document.querySelectorAll(".grid-square");
      squares.forEach((square) => {
        square.addEventListener("click", (event) => {
          // Extract the card type from the square's data attribute
          const cardType = square.getAttribute("data-card-type");
    
          // Handle square click event based on card type
          this.handleSquareClick(cardType);
        });
      });
    }
  
    attachSupplyClickListeners() {
      // Attach event listeners for supply elements
      // Handle supply click events here
    }
  
    attachCardClickListeners() {
      // Attach event listeners for card elements
      // Handle card click events here
    }
  
    attachBoardClickListeners() {
      // Attach event listeners for the game board
      // Handle board click events here
    }

  }