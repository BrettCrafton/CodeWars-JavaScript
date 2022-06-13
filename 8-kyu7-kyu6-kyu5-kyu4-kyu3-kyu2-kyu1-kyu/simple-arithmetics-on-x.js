function calc(x){
  let arr = String(x).split("")
  return (arr.reduce((a,c) => a + +c, 0) * x) - +arr.reverse().join("")
}