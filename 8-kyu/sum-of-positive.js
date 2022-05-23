function positiveSum(arr) {
  let filteredArr = arr.filter(a => a > 0)
return filteredArr.reduce((a,b) => a + b, 0 )
}