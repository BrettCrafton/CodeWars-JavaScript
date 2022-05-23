function padIt(str,n){
  let result = str
  let i = 0
  while (n > i ){
    if(i % 2 != 0){
      result += "*"
    }
    else{
      result = "*" + result
    }  
    i++
  }
  return result
}