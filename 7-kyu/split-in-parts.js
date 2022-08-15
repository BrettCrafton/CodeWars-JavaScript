var splitInParts = function(s, partLength){
  return s.split("").map((x,i) => i % partLength == 0 ? " " + x : x).join("").trim()
}