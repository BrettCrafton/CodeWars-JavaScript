function getCount(str) {
  let arr = "aeiou".split("")
  let vowelsCount = str.split("").filter(x => arr.includes(x))
  return vowelsCount.length
}