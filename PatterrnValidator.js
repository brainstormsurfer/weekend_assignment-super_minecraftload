import { Board } from './Board.js';
import { Square } from './Square.js';
import { UIHandler } from './UIHandler.js';


  class PatternValidator(board, card) {

    actionPatternValidator(action, type) { 


    }
  }


//     static validate2SquaresLinePattern(square, index, squares) {
//       // Implement validation logic for 2 squares line pattern
//     }
  
//     static validate3SquaresPattern(square, index, squares) {
//       // Implement validation logic for 3 squares pattern
//     }
  
//     static validateLSquaresPattern(square, index, squares) {
//       // Implement validation logic for L squares pattern
//     }
  
//     static validate4SquaresPattern(square, index, squares) {
//       // Implement validation logic for 4 squares pattern
//     }
  
//     static validate6SquaresPattern(square, index, squares) {
//       // Implement validation logic for 6 squares pattern
//     }
  
//     static validateDrillingPattern(square, index, squares, color) {
//       // Implement validation logic for drilling pattern based on color
//     }
  
//     // Add more pattern validation methods as needed
//   }
 
//   // action: either bombing or drilling
//   // type: if bombing ('2','3','4','L','6') or drilling ('ye)




//   function validateDrillSequence(action, type) {
//     let currentLength = 0;
  
//     for (let i = 0; i < squares.length; i++) {
//       const square = squares[i];
//       // Check if the square's terrain type and color match the drill requirements
//       if (
//         (square.terrainType === "dirt" || (square.terrainType === "steel plate" && square.color === color))
//       ) {
//         currentLength++;
//       } else {
//         currentLength = 0; // Reset the sequence if a square doesn't match
//       }
  
//       if (currentLength === requiredLength) {
//         return true; // Sequence of required length found
//       }
//     }
  
//     return false; // No valid sequence found
//   }
  

//   function squaresPatternHandler(actionType, color, board, requiredLength = 1) {
//     /* check type of action 
//     name of actionType will start with the type and end with it length
//     (bombing2, bombing3, bombing4, bombingL, bombing6, drilling-requiredLength)
//      -- if type = bombing call - 
//       Call to action validator function which scanning bombable (not tunnel, dirt, rocks) squares in the in-play boards
//       which match the requested pattern, in order to activate the action.
      
//      -- if type = drilling 
//      Call to action validator function which scanning drillable (not tunnel, dirt, steel plate that match the color)
//     and matches the requested patternCall (only linear in the case of drilling action)
//     in order to activate the action
//     */



//     // Check if there are at least two squares remaining below in the same column
//     if (index < squares.length - 8) {
//       const nextSquare1 = squares[index + 8];
  
//       // Check if the next square below is bombable (dirt or rock)
//       return (
//         (nextSquare1.terrainType === "dirt" || nextSquare1.terrainType === "rock")
//       );
//     }
//     return false;
//   }


//   function threeSquaresPatternLogic(square, index, squares) {
//     // Check if there are at least three squares remaining below in the same column
//     if (index < squares.length - 16) {
//       const nextSquare1 = squares[index + 8];
//       const nextSquare2 = squares[index + 16];
  
//       // Check if the current square and the next two squares below form a 3-Squares pattern
//       if (
//         twoSquaresPatternLogic(square, index, squares) &&
//         twoSquaresPatternLogic(nextSquare1, index + 8, squares) &&
//         twoSquaresPatternLogic(nextSquare2, index + 16, squares)
//       ) {
//         // Proceed to additional conditions specific to the 3-Squares pattern
//         // Implement 3-Squares pattern logic here
//         return true; // Pattern is valid
//       }
//     }
//     return false; // Not a valid 3-Squares pattern
//   }





// function twoSquaresPatternLogic(square, index, squares) {
//     // Check if there are at least two squares remaining below in the same column
//     if (index < squares.length - 8) {
//       const nextSquare1 = squares[index + 8];
  
//       // Check if the next square below is bombable (dirt or rock)
//       return (
//         (nextSquare1.terrainType === "dirt" || nextSquare1.terrainType === "rock")
//       );
//     }
//     return false;
//   }
//   function threeSquaresPatternLogic(square, index, squares) {
//     // Check if there are at least three squares remaining below in the same column
//     if (index < squares.length - 16) {
//       const nextSquare1 = squares[index + 8];
//       const nextSquare2 = squares[index + 16];
  
//       // Check if the current square and the next two squares below form a 3-Squares pattern
//       if (
//         twoSquaresPatternLogic(square, index, squares) &&
//         twoSquaresPatternLogic(nextSquare1, index + 8, squares) &&
//         twoSquaresPatternLogic(nextSquare2, index + 16, squares)
//       ) {
//         // Proceed to additional conditions specific to the 3-Squares pattern
//         // Implement 3-Squares pattern logic here
//         return true; // Pattern is valid
//       }
//     }
//     return false; // Not a valid 3-Squares pattern
//   }

//   function lSquaresPatternLogic(square, index, squares) {
//     // Check for a 2-Squares sequence to the left horizontally
//     if (
//       index >= 8 && // Ensure there are at least two squares remaining to the left in the same row
//       twoSquaresPatternLogic(squares[index - 8], index - 8, squares)
//     ) {
//       // Check for a 2-Squares sequence to the right horizontally
//       if (
//         index < squares.length - 8 && // Ensure there are at least two squares remaining to the right in the same row
//         twoSquaresPatternLogic(squares[index + 8], index + 8, squares)
//       ) {
//         // Check for a 2-Squares sequence above vertically
//         if (
//           index >= 16 && // Ensure there are at least two squares remaining above in the same column
//           twoSquaresPatternLogic(squares[index - 16], index - 16, squares)
//         ) {
//           // Check for a 2-Squares sequence below vertically
//           if (
//             index < squares.length - 16 && // Ensure there are at least two squares remaining below in the same column
//             twoSquaresPatternLogic(squares[index + 16], index + 16, squares)
//           ) {
//             // All conditions for L-Squares pattern are met
//             return true;
//           }
//         }
//       }
//     }
  
//     return false;
//   }

//   function sixSquaresPatternLogic(square, index, squares) {
//     // Check if there are at least six squares remaining to the right in the same row
//     if (index < squares.length - 6) {
//       // Check for two pairs of 3-Squares sequences
//       if (
//         threeSquaresPatternLogic(square, index, squares) &&
//         threeSquaresPatternLogic(squares[index + 3], index + 3, squares) &&
//         threeSquaresPatternLogic(squares[index + 1], index + 1, squares) &&
//         threeSquaresPatternLogic(squares[index + 4], index + 4, squares)
//       ) {
//         // All conditions for a 6-Squares pattern are met
//         return true;
//       }
//     }
//     return false;
//   }
     
  // function validateDrillingAction(color, numIcons, direction, squares) {
  //   // Check if the color and number of drill icons match
  //   if (numIcons === 2 && color === "red") {
  //     // Red drilling icons allow drilling vertically or horizontally
  //     return (
  //       direction === "vertical" ||
  //       direction === "horizontal"
  //     ) && validateDrillSequence(color, squares);
  //   } else if (numIcons === 3 && color === "yellow") {
  //     // Yellow drilling icons require a sequence of 5 squares
  //     return (
  //       direction === "vertical" ||
  //       direction === "horizontal"
  //     ) && validateDrillSequence(color, squares, 5);
  //   } else if (numIcons === 4 && color === "blue") {
  //     // Blue drilling icons require a sequence of 4 squares
  //     return (
  //       direction === "vertical" ||
  //       direction === "horizontal"
  //     ) && validateDrillSequence(color, squares, 4);
  //   }
  
  //   return false;
  // }