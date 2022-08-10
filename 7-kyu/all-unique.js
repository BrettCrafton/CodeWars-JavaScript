function hasUniqueChars(str){
  return [...new Set([...str])].length == str.length
}