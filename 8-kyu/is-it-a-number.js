function isDigit(s) {
  console.log(s)
  console.log(+s == s )
  console.log(s.length)
  return +s == s && s != " " && s != ""
}