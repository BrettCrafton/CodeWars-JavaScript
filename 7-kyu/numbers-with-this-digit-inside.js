function numbersWithDigitInside(x, d) {
  let arr = Array(x).fill().map((_,i) => i + 1).filter(x => String(x).includes(d))
  return arr.length != 0 ? [arr.length, arr.reduce((a,c) => a + c, 0), arr.reduce((a,c) => a * c)] : [0, 0, 0]
}