function factorial (n) {
  return n < 0 ? null : Array(n).fill().reduce((a,c,i) => a * (i +1), 1)
}