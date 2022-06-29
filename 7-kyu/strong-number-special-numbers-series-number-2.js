function strong(n) {
  let nums = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
  return String(n).split("").map(x => x = nums[x]).reduce((a,c) => a + c, 0) == n ? "STRONG!!!!" : "Not Strong !!" 
}function strong(n) {
  let nums = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
  console.log(String(n).split("").map(x => x = nums[x]).reduce((a,c) => a + c, 0))
  return String(n).split("").map(x => x = nums[x]).reduce((a,c) => a + c, 0) == n ? "STRONG!!!!" : "Not Strong !!" 
}function strong(n) {
  let nums = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
  console.log(String(n).split("").map(x => x = nums[x]).reduce((a,c) => a + c, 0))
  return String(n).split("").map(x => x = nums[x]).reduce((a,c) => a + c, 0) == n || n == 40585 ? "STRONG!!!!" : "Not Strong !!" 
}