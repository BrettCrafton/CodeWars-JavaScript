function fiveLine(s){
  return Array(5).fill(s).map((x,i) => s.trim().repeat( i + 1)).join("\n")
}