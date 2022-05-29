function capMe(names) {
  return names.map(x => x[0].toUpperCase() + x.slice(-(x.length - 1)).toLowerCase())
}