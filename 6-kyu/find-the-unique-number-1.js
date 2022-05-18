function findUniq(arr) {
  let sortedArrMin = arr.sort((a,b) => a-b)
  return sortedArrMin[0] == sortedArrMin[1] ? sortedArrMin[sortedArrMin.length -1] : sortedArrMin[0]
}