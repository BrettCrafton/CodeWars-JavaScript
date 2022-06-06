function arrayInterval(array, start, end) {
  return array.filter(x => x <= end && x >= start)
}