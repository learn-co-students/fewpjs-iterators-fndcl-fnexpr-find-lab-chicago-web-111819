const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const outcome = record.find( record => record.result === 'W')
  if (!!outcome === true){
    return outcome.year
  }
  else {
    undefined
  }
}