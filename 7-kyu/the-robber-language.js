function robberEncode(sentence) {
  let ignore = "aeiouAEIOU .!?-=<>/\|()[]{};,`!@#$%^&*'~0123456789:+_\\".split("")
  ignore.push('"')
  return sentence.split("").map(x => ignore.includes(x) ? x : x.toLowerCase() == x ? x + "o" + x : x + "O" + x  ).join("")
}