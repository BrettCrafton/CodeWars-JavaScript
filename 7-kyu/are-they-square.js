var isSquare = function(arr){
  return arr.length ? arr.map(x => Math.sqrt(x)).every(x => x % 1 == 0) : undefined
}