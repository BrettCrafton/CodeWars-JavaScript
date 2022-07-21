function strongestEven(n, m){
//   let nums = Array(m-n + 1).fill(n).map((x,i) => x + i)
//   let nums2 = nums.concat()
//   let obj = {}
//   for(let i = 0; i < nums.length; i++){
//     let count = 0
//     while(nums2[i] % 2 == 0){
//       nums2[i]/=2
//       count++
//     }
//     obj[nums[i]] = count
//   }
//   return +Object.keys(obj).find(x => obj[x] == Math.max(...Object.values(obj)))

  let current = n;
  for (let step = 1; current + step <= m; step *= 2) {
    if ((current + step) % (step * 2) === 0) {
      current += step;
    }
  }
  return current;
}