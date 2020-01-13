const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(function(e) {
     if (e.result === "W") {
       return e.year
     };
  });
  if (result) {
    return result.year
  } else {
    return result
  }
}