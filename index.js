const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winRecord = record.find(r => r.result === 'W') 

  if (winRecord) {
    return winRecord.year
  } else {
    return undefined
  }
}