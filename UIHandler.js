export class UIHandler {
    constructor(board) {
      this.board = board; // Reference to the game board
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
    
    handleSquareClick(cardType) {
      switch (cardType) {
        case "sp-red":
          // Handle sp-red card type
          break;
        case "adirt":
          // Handle adirt card type
          break;
        // Add more cases for other card types
        default:
          // Handle the default case
      }
    }
  }

  /*
// Add the 'blink' class to enable the blinking effect
document.querySelector('.in-hand::after').classList.add('blink');

// Remove the 'blink' class to disable the blinking effect
document.querySelector('.in-hand::after').classList.remove('blink');
 */


// Get the number of icons
  // const numberOfIcons = document.querySelectorAll('.icon').length;

  // Calculate the desired height based on the number of icons (adjust as needed)
  /*
  let height = 60; // Default height
  if (numberOfIcons === 3) {
    height = 90; // Adjusted height for three icons
  }
  
   --- CSS for the blinking effect--- 
.in-hand::after.blink {
  animation: blink 2s infinite;
}

*/
