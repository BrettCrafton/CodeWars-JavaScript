function amountOfPages(summary){
  let str = ""
  let counter 
  for(let i = 1; summary > str.length; i++){
    str += i
    counter = i
  }
  return counter
}