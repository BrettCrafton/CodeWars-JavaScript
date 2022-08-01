function numObj(s){
  let arr = Array(s.length).fill().map(x => x = {})
  arr.forEach((x,i) => x[s[i]] = String.fromCharCode(s[i]))
  return arr
}