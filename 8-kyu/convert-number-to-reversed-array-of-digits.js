function digitize(n) {
  let stringN = String(n)
return [...stringN].reverse().map(Number)
}