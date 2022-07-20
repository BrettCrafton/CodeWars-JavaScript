function pyramidHeight(n) {
  let x = 1
  let y = 0
  while(y < n){
    x++
    y = y + x * x
  }
  return x -1
}