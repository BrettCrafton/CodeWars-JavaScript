function arrayDeDup (array){
  console.log(array)
  return Array.isArray(array) ? [...new Set(array)].filter(x => x).sort() : "Not an array"

}