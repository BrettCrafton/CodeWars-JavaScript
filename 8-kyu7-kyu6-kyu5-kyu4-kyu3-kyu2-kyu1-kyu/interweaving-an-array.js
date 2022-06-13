function interweave(a, a2) {
  let arr = []
  while(a.length || a2.length){
    if(a.length)arr.push(a.shift())
    if(a2.length)arr.push(a2.shift())
  }
return arr
}