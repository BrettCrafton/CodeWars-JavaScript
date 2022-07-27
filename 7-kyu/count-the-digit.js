function nbDig(n, d) {
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push(i*i)
  }
  return arr.reduce((a,c) => a + c, "").split("").filter(x => x == d).length
}