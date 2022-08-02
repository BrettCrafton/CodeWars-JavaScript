function compoundArray(a, b) {
  let arr = []
  while(a.length || b.length){
    if(a.length){
      arr.push(a.shift())
    }
    if(b.length){
      arr.push(b.shift())
    }
  }
  return arr
}