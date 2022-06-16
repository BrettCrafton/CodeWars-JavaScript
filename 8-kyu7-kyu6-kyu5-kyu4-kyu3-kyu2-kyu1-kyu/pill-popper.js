function pillPopper(count, bottle, rx) {
  count = count.filter(x => x == "I")
  let length = count.length
  if(length < rx){
    for(let i = 0; i < rx - length; i++){
      let next = bottle.pop()
          while(next != "I" && bottle.length != 0){
            next = bottle.pop()
          }
      next == "I" ? count.push(next) : count.push(undefined)
    }
  }
  else{
    while(count.length > rx){
      bottle.push(count.pop())
    }
  }
  return count.includes(undefined)? false : [count, bottle]
}