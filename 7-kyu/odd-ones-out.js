function oddOnesOut(nums) {
  let obj = nums.reduce((a,c) => (a[c] = a[c] + 1 || 1,a),{})
  return nums.filter(x => obj[x] % 2 == 0)
}