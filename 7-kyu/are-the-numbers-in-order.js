function inAscOrder(arr) {
  return arr.every((x,i) => (arr[i-1] ? arr[i-1] : 0) < x)
}