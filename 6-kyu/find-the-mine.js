function mineLocation(field){
  let row = 0
  let column =  0
  for(let i = 0; i < field.length; i++){
    if(field[i].includes(1)){
      row = i
      column = field[i].indexOf(1)
    }
  }
  return [row, column]
}