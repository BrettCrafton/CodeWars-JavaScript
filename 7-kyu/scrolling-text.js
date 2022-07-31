function scrollingText(text){
  let arr = [text.toUpperCase()]
  let copy = text.toUpperCase().split("")
  for(let i = 0; i< text.length -1; i++){
    copy.push(copy.shift())
    arr.push(copy.join(""))
  }
  return arr
  
}