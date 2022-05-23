function all( arr, fun ){
  let condition = true
  for(let i = 0; i < arr.length; i++){
    if(fun(arr[i]) == false){
      condition = false
      break
    }    
  }
  return condition    
}