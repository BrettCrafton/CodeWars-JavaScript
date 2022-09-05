function nextHappyYear(year, x){
  if([...new Set(String(year).split(""))].length != 4 || !x){
    x = true
    return nextHappyYear(++year, x)
  }
  return year
}