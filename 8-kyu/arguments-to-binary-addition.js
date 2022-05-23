function arr2bin(arr){
  return arr.map(x => typeof x === "number" ? x : x = 0).reduce((x,y) => x + y, 0).toString(2)
}