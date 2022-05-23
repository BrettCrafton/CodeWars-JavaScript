function digital_root(n) {
let arr = String(n).split('')
  while(arr.length > 1){
    arr = arr.reduce((x,y) => x + +y,0)
    arr = String(arr).split('')
    }
  return +arr[0]
}