function alternateSqSum(arr){
  return arr.map((x,i) => i % 2 ? x * x : x).reduce((a,c) => a + c, 0)
}