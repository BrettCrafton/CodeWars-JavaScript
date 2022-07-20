function differenceOfSquares(n){
  let arr = Array(n).fill(n).map((x,i) => x - i)
  return Math.pow(arr.reduce((a,c) => a + c, 0), 2) - arr.map(x => x*x).reduce((a,c) => a+c, 0) 
}