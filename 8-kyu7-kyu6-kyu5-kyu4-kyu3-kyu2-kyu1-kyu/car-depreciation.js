function car(p,n){
  let value 
  if(n == 1){
    value = p * .8
  } 
  else if(n == 2){
    value = p * .8 * .8
    }
  else{
    value = p * .8 * .8
    for(let i = 2; i < n; i++){
      value *= .9
    }
  }
  return value.toFixed(2) + "" 
}