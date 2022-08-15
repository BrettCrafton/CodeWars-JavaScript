var vampire_test = function(a, b){
  let strA = String(a).split("")
  let strB = String(b).split("")
  let prod = String(BigInt(a) * BigInt(b)).split("")
  let arr = strA.concat(strB)
  
  return  arr.every(x => prod.includes(x)) && arr.length == prod.length
}