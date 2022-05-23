function aspectRatio(x,y){
  let xRatio = Math.ceil(y / 9 * 16)
  return [xRatio, y]
}