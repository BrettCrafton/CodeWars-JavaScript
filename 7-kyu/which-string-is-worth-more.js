function highestValue(a, b) {
  return  a.split("").map(x => x.charCodeAt(0)).reduce((x,y) => x + y, 0) < b.split("").map(x => x.charCodeAt(0)).reduce((x,y) => x + y, 0) ? b : a
}