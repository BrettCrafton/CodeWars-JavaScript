function findLongest(array){
  let max = Math.max(...array.map(x => String(x).length))
  return array.find(x => String(x).length == max)
}