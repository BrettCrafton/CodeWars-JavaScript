var flatten = function (array){
  let arr = []
  array.forEach(x => arr = arr.concat(x))
  return arr
}