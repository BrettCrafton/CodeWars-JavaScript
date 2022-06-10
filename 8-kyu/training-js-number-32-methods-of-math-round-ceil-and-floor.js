function roundIt(n){
  let countR = String(n).slice(String(n).indexOf(".") + 1).length
  let countL = String(n).length - countR - 1
  let response
  if(countR > countL){
    response = Math.ceil(n)
  }
  else if(countR < countL){
    response = Math.floor(n)
  }
  else{
    response = Math.round(n)
  }
  return response
}