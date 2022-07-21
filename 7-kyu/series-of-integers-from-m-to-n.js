function generateIntegers(m, n) {
  return Array(n - m + 1).fill(m).map((x, i) => x + i)
}