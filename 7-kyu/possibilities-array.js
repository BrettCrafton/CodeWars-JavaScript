function isAllPossibilities(x){
  let sort = x.sort((a,b) => a-b)
  return sort.every((x,i) => x == i) && x.length > 0
}