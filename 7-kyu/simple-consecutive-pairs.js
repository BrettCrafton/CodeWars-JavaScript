function pairs(ar){
  if(ar.length % 2 != 0){
    ar.pop()
  }
  let count = 0
  while(ar.length){
    let first = ar.shift()
    let second = ar.shift()
    if(first == second + 1 || first == second - 1){
      count++
    }
  }
 return count
};