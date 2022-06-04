function missingNo(nums) {
  return nums.sort((a,b) => a - b).find((x,i) => x != nums[i+1] -1) + 1
}