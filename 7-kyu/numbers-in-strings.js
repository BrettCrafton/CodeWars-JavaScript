function solve(s){
  let arr = []
  let num = ""
  for(let i = 0; i < s.length; i++){
    if(s[i] < 10){
      num += s[i]
    }
    else{
      arr.push(+num)
      num = ""
    }
  }
  arr.push(+num)
  return Math.max(...arr)
};