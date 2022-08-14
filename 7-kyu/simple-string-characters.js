function solve(s){
  s = s.split("")
  let m = s.map(x => x.charCodeAt())
  
  let upper = m.filter( x => x <= 90 && x >= 65 ).length
  let lower = m.filter( x => x > 96  ).length
  let number = s.filter( x => x < 10  ).length
  let special = s.length - upper - lower - number
  
 return [upper, lower, number, special]
}