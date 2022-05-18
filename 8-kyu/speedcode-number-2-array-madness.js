function arrayMadness(a, b) {
  return a.map(x => x = Math.pow(x, 2)).reduce((x, y) => x+y, 0) > b.map(x => x = Math.pow(x, 3)).reduce((x, y) => x+y, 0) 
}