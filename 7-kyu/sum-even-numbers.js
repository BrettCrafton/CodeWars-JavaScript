function sumEvenNumbers(input) {
  return input.reduce((a,c)=>a+(c%2==0?c:0),0)
}