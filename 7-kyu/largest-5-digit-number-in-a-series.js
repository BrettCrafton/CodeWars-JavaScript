function solution(digits){
  let arr = []
  for(let i = 0; i < digits.length; i++){
    if(digits[i] == Math.max(...digits.slice(0, digits.length-4))){
      arr.push(digits.slice(i, i+5))
    }
  }
  return Math.max(...arr)
}