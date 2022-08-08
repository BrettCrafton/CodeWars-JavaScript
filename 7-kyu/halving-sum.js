function halvingSum(n) {
  let arr = []
  while(n != 1){
    arr.push(n)
    n = Math.floor(n/2)
  }
    return arr.reduce((a,c) => a+c, 0) + 1
}