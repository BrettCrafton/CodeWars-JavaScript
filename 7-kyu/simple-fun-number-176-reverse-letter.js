function reverseLetter(str) {
  let arr = "abcdefghijklmnopqrstuvwxyz".split("")
  return str.split("").filter(x => arr.includes(x)).reverse().join("")
  
  
}