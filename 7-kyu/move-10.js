function moveTen(s){
  return s.split("").map(x => String.fromCharCode(x.charCodeAt() + 10 > 122 ? ((x.charCodeAt() + 10) % 122) + 96  : x.charCodeAt() + 10  )).join("")
}