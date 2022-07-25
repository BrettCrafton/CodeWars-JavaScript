function mxdiflg(a1, a2) {
  console.log(arguments)
  if(a1.length && a2.length){
    let x = a1.map(x => x.length)
    let y = a2.map(x => x.length)
    let max1 = Math.max(...x)
    let max2 = Math.max(...y)
    let min1 = Math.min(...x)
    let min2 = Math.min(...y)
    return Math.max(max1 - min2, max2 - min1)
  }
  else{
     return -1              
  }
}