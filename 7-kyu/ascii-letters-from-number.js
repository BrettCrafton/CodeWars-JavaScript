function convert(number){
  return  number.split('').reduce((s, c) => {let l = s.length-1; (s[l] && s[l].length < 2) ? s[l] += c : s.push(c); return s;}, []).map(x => String.fromCharCode(x)).join("")

}