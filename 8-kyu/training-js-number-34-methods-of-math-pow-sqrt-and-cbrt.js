function cutCube(volume,n){
  return  Math.cbrt(n) % 1 == 0 && Math.cbrt(volume) % 1 == 0 && volume % n == 0
}