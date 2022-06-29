function maxRot(n) {
  n = String(n).split("")
  let arr = []
  arr.push(n.join(""))
  for(let i = 0; i < n.length; i++){
    n.push(n.splice(i, 1))
    arr.push(n.join(""))
  }
  return Math.max(...arr)
}