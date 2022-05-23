function narcissistic(value) {  
  let compArr =[]
  let splitArr = String(value).split("")
    splitArr.forEach(x => compArr.push(Math.pow(x, splitArr.length)))
return compArr.reduce((x,y) => x+ y, 0) == value
}