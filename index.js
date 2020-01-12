const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(winLossRecord) {
  let theOneWhereTheyWon = winLossRecord.find( game => game.result === "W" );
  if (theOneWhereTheyWon) { 
    return theOneWhereTheyWon.year;
  } else {
    return theOneWhereTheyWon;
  }
}