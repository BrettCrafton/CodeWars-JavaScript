function removeSmallest(numbers) {
  let arr = numbers.concat()
  arr.splice(numbers.indexOf(Math.min(...numbers)), 1)
  return arr
}