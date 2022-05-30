function lastSurvivor(letters, coords) {
  let arr = letters.split("")
  while(coords.length){
    arr.splice(coords.shift(), 1)
  }
  return arr[0]
}