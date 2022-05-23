function stringy(size) {
  let arr = []
  for(let i = 1; i < size/2; i++){
    arr.push("10")
  }
  
return size % 2 == 0 ? arr.join('') + "10" : arr.join('') + "1"
}