function findSum(n) {
  return Array(n).fill().map((x,i) => x = i + 1).filter(x => x % 3 ==0 || x % 5 ==0).reduce((a,c) => a + c, 0)
}