function makesTheSentence(c, s) {
  let arr = s.split("").filter(x => x != " ")
  return arr.every(x => c.includes(x)) && c.length == arr.length && arr.filter(x => x == "p").length == c.filter(x => x == "p").length
}