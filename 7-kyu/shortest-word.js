function findShort(s){
  let arrSort = s.split(" ").sort((a,b) => a.length - b.length)
  return arrSort[0].length
}