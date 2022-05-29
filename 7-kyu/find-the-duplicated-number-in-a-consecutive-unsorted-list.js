function findDup( arr ){
  let sorted = arr.sort((a,b) => a - b)
  return sorted.find((x,i) => x == sorted[i+1])
}