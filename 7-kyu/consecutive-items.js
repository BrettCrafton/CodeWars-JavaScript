function consecutive(arr, a, b) { 
  let i = arr.indexOf(a) 
  let r = arr.indexOf(b)
  return i == r -1 || i == r + 1
}