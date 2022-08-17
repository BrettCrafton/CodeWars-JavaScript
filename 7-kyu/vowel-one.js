function vowelOne(s){
  let vowels = "aeiouAEIOU".split("")
  return s.split("").map(x => vowels.includes(x) ? 1 : 0).join("")
}