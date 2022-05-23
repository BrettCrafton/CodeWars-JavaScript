function accum(s) {
  return  [...s.toUpperCase()].map((x,i) => x = x + x.toLowerCase().repeat(i)).join("-")
}