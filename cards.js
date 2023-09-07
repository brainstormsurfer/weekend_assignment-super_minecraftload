

const cardStatus = {
  1: "draw-pile",
  2: "in-hand",
  3: "in-play",
  4: "discard-pile",
  5: "market-red",
  6: "market-yellow",
  7: "market-blue",
  8: "market-multi",
};

const drillBonus = {
  1: "draw1",
  2: "draw2",
  3: "bomb-token",
  4: "corner-drilling",
  5: "rock-drilling",
  6: "minerals-splitting",
};

const buyBonus = {
  1: "draw1",
  2: "draw2",
  3: "bomb-token",
  4: "to-hand",
  5: "extra-action",
  6: "duplicate-mineral",
  // 7: "minor-replacment"
};

// Assuming you have card data with color information


const purpleTeamStrings = [
  "p-blue01-dr1",
  "p-blue02-dr1",
  "p-blue03-dr1",
  "p-blue10-dr1-db1-bb4-vp2",
  "p-blue15-dr2-db1-bb4-vp3",
  "p-blue20-dr1-db1-bb4-vp5",
  "p-blue25-dr1-db1-vp10",
  "p-multi10-dr1-db4-bb2-vp2",
  "p-multi15-dr1-bb6-vp3",
  "p-multi20-dr2-bb2-vp6",
  "p-multi25-dr1-vp12",
  "p-red01-dr1-bomb2",
  "p-red02-dr1-bomb3",
  "p-red10-dr2-bb3-bomb4-vp2",
  "p-red15-dr2-bb3-bomb6-vp5",
  "p-red20-dr2-bb3-bomb4-vp7",
  "p-red25-dr2-bomb4-vp9",
  "p-yellow01-dr1",
  "p-yellow02-dr1",
  "p-yellow10-dr2-bb6-vp3",
  "p-yellow15-dr3-bb6-vp5",
  "p-yellow20-dr2-bb6-vp6",
  "p-yellow25-dr2-vp10",
];

const whiteTeamStrings = [
  "w-blue01-dr1",
  "w-blue02-dr1",
  "w-blue03-dr1",
  "w-blue10-dr1-db1-bb3-vp2",
  "w-blue15-dr1-db1-bb3-vp3",
  "w-blue20-dr1-db1-bb3-vp5",
  "w-blue25-dr1-db1-vp10",
  "w-multi10-dr1-db5-bb4-vp2",
  "w-multi15-dr1-db7-bb4-vp3",
  "w-multi20-dr2-db4-vp6",
  "w-multi25-dr1-vp12",
  "w-red01-dr1-bomb2",
  "w-red02-dr1-bomb3",
  "w-red10-dr2-bomb4-bb5-vp2",
  "w-red15-dr2-bombL-bb5-vp5",
  "w-red20-dr2-bomb4-bb5-vp7",
  "w-red25-dr2-bomb4-vp9",
  "w-yellow01-dr1",
  "w-yellow02-dr1",
  "w-yellow10-dr2-bb6-vp3",
  "w-yellow15-dr3-bb6-vp5",
  "w-yellow20-dr2-bb6-vp6",
  "w-yellow25-dr2-vp10",
];
export default function initializeTeamCards(colorOfTeam) {
  const team = [];
  const backsideImage = `${colorOfTeam}-team.jpg`;
  let idNumber = 1;   
  const teamStrings = colorOfTeam === "purple" ? purpleTeamStrings : whiteTeamStrings;

  for (const cardInfo of teamStrings) {

    const [teamColor, tempColorPrice, tempDrillIcons, tempBuyBonus, tempVictoryPoints] =
      cardInfo.split("-");

    // Extract the color and price differently
    const tempColor = /[a-zA-Z]+/.exec(tempColorPrice);
    const tempPrice = /\d+/.exec(tempColorPrice);
  //
    const cardColor = tempColor ? tempColor[0] : ''; // Use a ternary operator to handle null result
    const cardPrice = parseInt(tempPrice[0])
    
    // Check if tempDrillIcons, tempBuyBonus, and tempVictoryPoints exist before accessing them
    const drillIcons = tempDrillIcons ? tempDrillIcons.substring(2) : '';
    const buyBonus = tempBuyBonus ? tempBuyBonus.substring(2) : '';
    const victoryPoints = tempVictoryPoints ? tempVictoryPoints.substring(2) : '';

    // Initialize bombPattern as an empty string
    let bombPattern = '';

    // Determine the card status (/placement) based on price
    // (While starter cards have no price)
    let cardInitialStatus = 1; // Default to draw-pile
    if (cardPrice >= 10) {
      // Non-starter cards
      switch (cardColor) {
        case "red":
          cardInitialStatus = 5; // market-red pile
          break;
        case "yellow":
          cardInitialStatus = 6; // market-yellow pile
          break;
        case "blue":
          cardInitialStatus = 7; // market-blue pile
          break;
        default:
          cardInitialStatus = 8; // market-multi-color pile
          break;
      }
    }

    // Skip assignment if drillIcons, buyBonus, and victoryPoints are empty
    const card = {
      id: `${teamColor.charAt(0)}${cardColor.charAt(0)}${idNumber.toString().padStart(2, "0")}`,
      teamColor: colorOfTeam,
      color: cardColor,
      price: cardPrice >= 10 ? cardPrice : 0,
      cardStatus: cardInitialStatus, // Set the initial status to draw-pile
      backImage: backsideImage,
      frontImage: `${cardInfo}.jpg`,
    };  
    // Check if the card has drillIcons, buyBonus, and victoryPoints and assign them if present
    if (drillIcons) {
      card.drillIcons = parseInt(drillIcons);
    }
    if (buyBonus) {
      // Skip buyBonus assignment for cards that cost 25
      if (cardPrice !== 25) {
        card.buyBonus = buyBonus;
      }
    }
    if (victoryPoints) {
      card.victoryPoints = parseInt(victoryPoints);
    }

    // Extract the bomb pattern and assign to a red card
    if (cardColor === 'red') {
      const tempBombPatternIndex = cardInfo.indexOf("bomb");
      if (tempBombPatternIndex !== -1) {
        bombPattern = cardInfo.substring(tempBombPatternIndex+4,tempBombPatternIndex+5); 
        card.bombPattern = bombPattern
      }    
 }

    team.push(card);
    idNumber++;
  }
  return team;
}

