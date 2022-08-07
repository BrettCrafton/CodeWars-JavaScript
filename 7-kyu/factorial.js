function factorial(n){
  if(n < 0 || n > 12){
   throw "ValueError"
  }
  else{
    return Array(n).fill().map((x,i) => i +1 ).reduce((a,c) => a * (c || 1), 1)
  }
}