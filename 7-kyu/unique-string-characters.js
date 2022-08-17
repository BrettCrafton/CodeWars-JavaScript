function solve(a,b){
  return unique(a,b) + unique(b,a)
};
function unique(x,y){
  return x.split("").filter(x => !y.includes(x)).join("")
}