function adjacentElementsProduct(array) {
  let arr = array.map((x,i) => x * array[i+1])
  arr.pop()
  return Math.max(...arr)
}