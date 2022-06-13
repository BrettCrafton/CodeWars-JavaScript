//Write your solution below
function upperCasePlace (s, n) {
  if(n >= 0){
    n = n < 1 ? 0 : Math.floor(n) -1
    s = s.toLowerCase()
    s = s.concat().split(" ").map(x=>x.split("").map((x,i)=> i == n ? x.toUpperCase() : x).join(""))
    return s.join(" ")
    }
  else{
    return s.toLowerCase()
  }
}