function maxMultiple(divisor, bound){
  let answer = divisor
  while (answer <= bound){
    answer += divisor
  }
  return answer - divisor
}