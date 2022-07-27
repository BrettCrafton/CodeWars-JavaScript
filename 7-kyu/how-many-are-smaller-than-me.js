function smaller(nums) {
  return nums.map((x,i,arr) => arr.slice(i).filter(e => x > e).length)
}