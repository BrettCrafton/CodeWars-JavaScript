function drawStairs(n) {
  let str = ""
  let spaces = ""
 for(let i = 1; i < n; i++){
   spaces += " "
   str = str + "I\n" + spaces
 }
  return str + "I"
}