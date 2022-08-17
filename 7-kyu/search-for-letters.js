function change(string){
  let arr = "abcdefghijklmnopqrstuvwxyz".split("")
  return arr.map(x => string.toLowerCase().includes(x) ? 1 : 0).join("")
}