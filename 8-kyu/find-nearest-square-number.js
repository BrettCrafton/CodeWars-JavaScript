function nearestSq(n){
  let value = Math.sqrt(n)
  return n - Math.pow(Math.floor(value), 2) < Math.abs(n - Math.pow(Math.ceil(value), 2)) ? Math.pow(Math.floor(value), 2) : Math.pow(Math.ceil(value), 2) 
}