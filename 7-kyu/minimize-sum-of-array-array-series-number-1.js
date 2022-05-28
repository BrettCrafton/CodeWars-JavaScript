function minSum(arr) {
  let sorted = arr.sort((a,b)=>a-b)
  return sorted.reduce((a,c) => a + (c * sorted.pop()), 0) 
}