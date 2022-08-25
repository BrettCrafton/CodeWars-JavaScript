function rot90Clock(strng) {
  return diag1Sym(strng).split("\n").map(x => x.split("").reverse().join("")).join("\n")
}
function diag1Sym(strng) {
  let arr = []
  let str = strng.split("\n")
  for(let i = 0; i < str[0].length; i++){
    arr.push(str.map(x => x[i]).join(""))
  }
  
  return arr.join("\n")
}
function selfieAndDiag1(strng) {
  let arr = []
  let str = strng.split("\n")
  for(let i = 0; i < str[0].length; i++){
    arr.push(str.map(x => x[i]).join(""))
  }
    return strng.split("\n").map((x,i) => x + "|" + arr[i] ).join("\n")
}
function oper(fct, s) {
    return fct(s);
}