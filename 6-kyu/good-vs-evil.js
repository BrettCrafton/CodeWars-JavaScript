function goodVsEvil(good, evil){
  let gArr = [1, 2, 3, 3, 4, 10]
  let eArr = [1, 2, 2, 2, 3, 5, 10]
  let e = evil.split(" ").map((x, i) => +x * eArr[i]).reduce((a,c) => a + c, 0)
  let g = good.split(" ").map((x, i) => +x * gArr[i]).reduce((a,c) => a + c, 0)
 return  e > g ? "Battle Result: Evil eradicates all trace of Good" : g > e ? "Battle Result: Good triumphs over Evil" : "Battle Result: No victor on this battle field"
}