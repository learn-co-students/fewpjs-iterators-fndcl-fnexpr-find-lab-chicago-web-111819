
function superbowlWin(records) {
  let winYear;
  const foundRecord = records.find(record => record.result == "W");
  if (foundRecord) {
    winYear = foundRecord.year;
  }
  return winYear;
}

