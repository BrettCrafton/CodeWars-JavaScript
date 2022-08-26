function cleanString(s) {
  let res = s
  for(let i = 0; i < s.length; i++){
    if(i == 0 && res[0] == "#"){
      res = res.slice(1)
      i--
    }
    else if(res[i] == "#"){
      res = res.slice(0, i -1) + res.slice(i+1)
       i-=2
    } 
  }
  
  return res
}