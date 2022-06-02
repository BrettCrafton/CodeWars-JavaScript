function sequence(n, pattern) {
 return typeof pattern == "function" ? [...Array(n)].map((x,i) => pattern(x, i)) : Array(n).fill(pattern)
}function sequence(n, pattern) {
  let arr = []
  for(let i = 0; i < n; i++){
    
    if(typeof pattern == "function"){
      let x = ""
      arr.push(pattern(x, i))
    }
    else{
        arr.push(pattern)
    }
  }
  
  return arr
  
}