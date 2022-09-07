function mergeStrings(first, second){
  let i = 0
  while(first.slice(i) != second.slice(0, first.length - i)){
     i++
  }
  return first + second.slice(first.length-i)
}