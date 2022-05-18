function first(arr, n) {  
  return arr.slice(0, n == 0 ? 0 : n ? n : 1)
}