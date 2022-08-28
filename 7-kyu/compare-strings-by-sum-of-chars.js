function compare(s1, s2) {
  let arr = "1234567890!#".split("")
  if(s1 == null || s1.split("").some(x => arr.includes(x) )){
    s1 = ""
  }
  if(s2 == null || s2.split("").some(x => arr.includes(x) )){
    s2 = ""
  }
  return charSum(s1.toUpperCase()) == charSum(s2.toUpperCase())
}
function charSum(string){
  return string.split("").reduce((a,c) => a+ c.charCodeAt(), 0)
}