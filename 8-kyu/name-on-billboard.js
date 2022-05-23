function billboard(name, price = 30){
  return [...Array(name.length)].fill(price).reduce((x,y) => x+y, 0)
}