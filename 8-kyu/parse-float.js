function parseF(s) {
  console.log(s)
  if(typeof s === "boolean"){
    return null
  }
  else{
  return !+s && s != 0 ? null : +s
    }
}