function duplicates(array){
  let length = array.length
  let counter = 0
  for(let i = 0; i < length; i++){
    let element = array.pop()
    if(array.includes(element)){
      array.splice(array.indexOf(element), 1)
      counter++
    } 
  }
  return counter
}