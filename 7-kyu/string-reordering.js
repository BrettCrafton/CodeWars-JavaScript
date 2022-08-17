function sentence(List) {
  let arr = List.map(x => Object.entries(x))
  return arr.sort((a,b) => a[0][0] - b[0][0]).map(x => x[0][1]).join(" ")
}