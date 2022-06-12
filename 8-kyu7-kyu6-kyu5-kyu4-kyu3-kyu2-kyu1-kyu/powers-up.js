function powersUp(number, upTo) {
  return Array(upTo).fill(number).reduce((a,c, i) => a + Math.pow(c, i+1), 0)
}