function sumMul(n,m){
  let arr =[]
  for(let i = 1;(i * n) < m; i++){
    arr.push(n * i)
  }
return n == 0 || m == 0 || m < n ? 'INVALID' : arr.reduce((x,y) => x+y,0)
}