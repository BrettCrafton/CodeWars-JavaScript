function divisors(integer) {
  let arr = []
  for(let i = 2; i <= (integer / 2) ; i++){
    if(integer % i == 0) arr.push(i)
  }
  return arr.length ? arr : `${integer} is prime`
};