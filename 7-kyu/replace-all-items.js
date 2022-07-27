function replaceAll(seq, find, replace) {
  return typeof seq == "string" ? seq.split("").map(x => x == find ? replace :x).join("") : seq.map(x => x == find ? replace :x)
}