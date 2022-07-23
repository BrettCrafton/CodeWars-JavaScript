function extraPerfect(n){
  return Array(n).fill().map((x,i) => i + 1).filter(x => x % 2)
}