function squareOrSquareRoot(array) {
  return array.map(x => Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : x * x);  
}