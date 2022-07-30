function crap(x, bags, cap){
  return x.flat().includes("D") ? "Dog!!" : x.flat().filter(x => x == "@").length <= bags * cap ? "Clean" : "Cr@p"
}