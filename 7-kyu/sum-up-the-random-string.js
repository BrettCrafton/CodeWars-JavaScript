function sumFromString(s){
  let counter = 0
  let num = ""
  for(let i = 0; i < s.length; i++){
    if(s[i] < 10){
      num += s[i]
    }
    else{
      counter += +num
      num = ""
    }
    
  }
  return counter + +num
}