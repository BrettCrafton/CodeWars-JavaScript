function generateShape(integer){
  let str = ('+'.repeat(integer)  + '\n').repeat(integer)
  return str.slice(0, str.length - 1)
}