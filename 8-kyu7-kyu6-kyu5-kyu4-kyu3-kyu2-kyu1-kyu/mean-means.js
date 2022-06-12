function geo_mean(nums, arith_mean) {
  let missing = arith_mean * (nums.length + 1) - nums.reduce((a,c) => a + c, 0)
  nums.push(missing)
  return nthroot(nums.reduce((a,c) => a * c), nums.length)
}
function nthroot(x, n) {
  try {
    var negate = n % 2 == 1 && x < 0;
    if(negate)
      x = -x;
    var possible = Math.pow(x, 1 / n);
    n = Math.pow(possible, n);
    if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
      return negate ? -possible : possible;
  } catch(e){}
}