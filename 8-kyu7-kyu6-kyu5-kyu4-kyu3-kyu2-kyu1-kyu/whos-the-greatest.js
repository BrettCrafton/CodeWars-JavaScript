function isGreaterThan(x, y){
  x = x.replace(/^0+/, '')
  y = y.replace(/^0+/, '')
  let xArr = x.split("")
  let yArr = y.split("")
  let i = xArr.findIndex((x, i) => xArr[i] != yArr[i] )
  if(x.length > y.length)return true
  else if(x.length == y.length && xArr[i] > yArr[i]) return true
  else return false
}