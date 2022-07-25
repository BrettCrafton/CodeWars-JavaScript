function nbYear(p0, percent, aug, p) {
  let current = p0
  let years = 0
  while(current < p){
   current = parseInt(current * (1 +  (percent/100)) + aug )
    years++
  }
  return years
}