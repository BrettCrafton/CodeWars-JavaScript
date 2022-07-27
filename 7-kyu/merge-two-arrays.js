function mergeArrays(a, b) {
  let arr = []
  let length = Math.max(a.length, b.length)
  for(let i = 0; i < length; i++){
    if(a.length){
      arr.push(a.shift())
    }
    if(b.length){
      arr.push(b.shift())
    }
  }
  return arr
}