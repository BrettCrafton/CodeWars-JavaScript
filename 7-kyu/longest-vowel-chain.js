function solve(s){
  let vowels = "aeiou".split("")
  let captainSlow = s.split("").map((x,i, arr) => vowels.includes(x) ? arr.slice(i, i + arr.slice(i).findIndex(e => !vowels.includes(e))).length : 0)
 return Math.max(...captainSlow)
}