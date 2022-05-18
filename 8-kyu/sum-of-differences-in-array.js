function sumOfDifferences(arr) {
  
  return arr.sort((a,b)=> b - a).map((x, i) => x = x - arr[i + 1]).splice(0, arr.length -1).reduce((x,y)=> x+y, 0)
}