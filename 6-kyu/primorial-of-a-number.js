function numPrimorial(n){
  let arr = [2,3,5,7]
  let prime = 11
  if(n > 4){
    while(n > 4){
      arr.push(prime)
      prime++
      while(prime % 2 == 0 || prime % 3 == 0 || prime % 4 == 0 || prime % 5 == 0 || prime % 6 == 0 || prime % 7 == 0 || prime %8 == 0 || prime % 9 == 0){
        prime++
        }
      n--
    }
    return arr.reduce((a,c) => a * c)
  }
  else{
    return arr.slice(0,n).reduce((a,c) => a * c)
  }
}
//