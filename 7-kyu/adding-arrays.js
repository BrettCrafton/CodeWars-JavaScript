function arrAdder(arr) {
  return arr[0].map((x,i) => arr.reduce((a,c) => a + (c[i] ? c[i] : ""), "")).join(" ").trim()
}