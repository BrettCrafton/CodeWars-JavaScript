function disariumNumber(n){
  return String(n).split("").map((x, i) => Math.pow(x, i + 1)).reduce((a,c) => a + c, 0) == n ? "Disarium !!" : "Not !!"
}