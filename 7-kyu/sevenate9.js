function sevenAte9(str) {
  str = str.split("")
  for(let i = 0; i < str.length; i++){
    if(str[i] == 7 && str[i+1] == 9 && str[i+2] == 7){
      str[i+1]=""
    }
  }
  return str.join("")
  
}