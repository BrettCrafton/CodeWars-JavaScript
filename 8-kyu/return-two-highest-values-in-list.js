function twoHighest(arr) {
  let sortedUniqueArr = [...new Set(arr)].sort((a,b)=> b - a)
  return arr.length == 0 ? [] :sortedUniqueArr.length == 1 ? sortedUniqueArr : sortedUniqueArr.splice(0,2)
}