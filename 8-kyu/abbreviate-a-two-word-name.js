function abbrevName(name){
let arrayStrings = name.toUpperCase().split(" ")
  return arrayStrings.map(x => x[0]).join('.')
}