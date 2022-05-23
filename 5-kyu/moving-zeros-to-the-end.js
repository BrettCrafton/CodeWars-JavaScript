function moveZeros(arr) {
  let filteredArrZero = arr.filter(x => x === 0)
  let filteredArrNotZero = arr.filter(x => x !== 0)
  return filteredArrNotZero.concat(filteredArrZero)
}