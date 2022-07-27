function switcher(x){
  let letters = " ?!abcdefghijklmnopqrstuvwxyz".split("").reverse()
  return x.map(x => letters[Number(x) -1]).join("")
}