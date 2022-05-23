function datingRange(age){
  let min = age <= 14? Math.floor(age - 0.10 * age) : Math.floor(age/2 + 7) 
  let max = age <= 14? Math.floor(age + 0.10 * age) : (age - 7)*2
  return min + "-" + max
}