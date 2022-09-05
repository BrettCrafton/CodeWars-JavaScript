function splitTheBill(x) {
  let arr = Object.values(x)
  let avg = arr.reduce((a,c) => a+c, 0) / arr.length
  for(let key in x){
    x[key] = Math.round((x[key] - avg) * 100 )/100
  }
  return x
}