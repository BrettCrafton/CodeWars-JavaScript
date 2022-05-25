function SeriesSum(n){
  console.log(n)
  let counter = 1
  let answer = 1
  for(let i = 1; i<n; i++){
    counter += 3
    answer += 1/counter
  }
  return n == 0 ? "0.00" : answer.toFixed(2)
}