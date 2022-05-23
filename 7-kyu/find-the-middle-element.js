function gimme (triplet) {
  return triplet.findIndex(x => x != Math.min(...triplet) && x != Math.max(...triplet))
}