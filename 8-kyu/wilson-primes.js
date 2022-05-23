function amIWilson(p) {
  let sum = 1
  function factorial(x){
    for(let i = 1; i < x; i++){
      sum *= i
    }
  }
  factorial(p)
  return Number.isInteger((sum + 1) / (p * p))
}