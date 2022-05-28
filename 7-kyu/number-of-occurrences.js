Array.prototype.numberOfOccurrences = function(y) {
  return this.filter(x => x == y).length
}