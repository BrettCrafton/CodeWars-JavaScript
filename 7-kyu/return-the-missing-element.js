function getMissingElement(superImportantArray){
  let arr = "0123456789".split("").map(x=> +x)
  return arr.find(x => !superImportantArray.includes(x))
}