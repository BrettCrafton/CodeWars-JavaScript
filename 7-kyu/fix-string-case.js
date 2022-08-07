function solve(s){
  return s.split("").filter(x => x.toLowerCase() == x).length >= s.length/2 ? s.toLowerCase() : s.toUpperCase()
}