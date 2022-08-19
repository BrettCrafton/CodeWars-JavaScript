function meeting(s) {
  let arr = s.toUpperCase().split(";").map(x => x.split(":").reverse())
  return arr.sort().map(x => "(" + x.join(", ") + ")").join("")
}