function giveMeFive(obj){
  let arr = []
  for(let keys in obj){
    if(keys.length == 5 ) arr.push(keys)
    if(obj[keys].length == 5) arr.push(obj[keys])
  }
  return arr
}