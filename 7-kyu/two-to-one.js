function longest(s1, s2) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
  let s1Arr = s1.split("")
  let s2Arr = s2.split("")
  let arr = []
  for(let i = 0; i < alpha.length; i++ ){
    if(s1Arr.includes(alpha[i])){
       arr.push(alpha[i])
       }
    else if(s2Arr.includes(alpha[i])){
       arr.push(alpha[i])
       }
  }  
  return arr.join("")
}