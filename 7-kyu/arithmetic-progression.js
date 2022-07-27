function arithmeticSequenceElements(a,r,n) {
  return Array(n).fill(a).map((x,i) => x + (i * r)).join(", ")
}