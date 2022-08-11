function multiples(m, n){
  return Array(m).fill(n).map((x,i) => x + (i * n))
}