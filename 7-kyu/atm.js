function solve(n) {
  let arr = []
  if(n%10 != 0){
    return -1
  }
  if(n < 10){
    return -1
  }
  else{
    while(n!=0){
      if(Math.floor(n/500) >= 1){
        arr.push(Math.floor(n/500))
        n = n - (Math.floor(n/500)) * 500
      }
      else if(Math.floor(n/200) >= 1){
        arr.push(Math.floor(n/200))
        n = n - (Math.floor(n/200)) * 200
      }
      else if(Math.floor(n/100) >= 1){
        arr.push(Math.floor(n/100))
        n = n - (Math.floor(n/100)) * 100
      }
      else if(Math.floor(n/50) >= 1){
        arr.push(Math.floor(n/50))
        n = n - (Math.floor(n/50)) * 50
      }
      else if(Math.floor(n/20) >= 1){
        arr.push(Math.floor(n/20))
        n = n - (Math.floor(n/20)) * 20
      }
      else if(Math.floor(n/10) >= 1){
        arr.push(Math.floor(n/10))
        n = n - (Math.floor(n/10)) * 10
      }
    }
    return arr.reduce((x,y) => x+y, 0)
    }
}