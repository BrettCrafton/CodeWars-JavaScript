function diag2Sym(strng) {
  let arr = []
  let str = strng.split("\n")
  for(let i = str[0].length; i > -1; i--){
    arr.push(str.map(x => x[i]).reverse().join(""))
  }
  return arr.slice(1).join("\n")
}
function rot90Counter(strng) {
    return diag2Sym(strng).split("\n").map(x => x.split("").reverse().join("")).join("\n")
}
function selfieDiag2Counterclock(strng) {
 let arr = []
  let str = strng.split("\n")
  for(let i = str[0].length; i > -1; i--){
    arr.push(str.map(x => x[i]).reverse().join(""))
  }
  arr = arr.slice(1)
  let rot = diag2Sym(strng).split("\n").map(x => x.split("").reverse().join(""))
    return strng.split("\n").map((x,i) => x + "|" + arr[i] + "|" + rot[i] ).join("\n")
}
function oper(fct, s) {
    return fct(s);
}