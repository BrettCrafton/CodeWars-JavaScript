snail = function(array) {
  let result = []
  if(array.length < 2){
    return array[0]
  }
  else{
  while(array.length > 1){
    
  //right
  result.push(array.shift())    
    
  //down
    for(let a = 0; a < array.length; a++){
      //loop a++, 0 till array.length - 1
     result.push(array[a].pop())          
    }
    
  //left
  result.push(array.pop().reverse()) 

       
  //up
    for(let b = array.length - 1; b > 0; b--){
    //loop b-- till 0
    result.push(array[b].shift()) 
       }
    
     }
    }
   if(array.length == 1){
      result.push(array[0])
  }
  return [].concat.apply([], result)
}