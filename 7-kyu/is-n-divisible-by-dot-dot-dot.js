function isDivisible(){
  let arr = [...arguments]
  return arr.every(x => arr[0] % x == 0)
}