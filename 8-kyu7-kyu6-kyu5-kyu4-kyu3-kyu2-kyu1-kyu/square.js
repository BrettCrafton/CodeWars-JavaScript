function squareRoot(numbers){
  let sum = numbers.reduce((a,c) => a+c, 0)
  return Math.sqrt(sum) % 1 == 0 ? Math.sqrt(sum) : sum
}