function charFreq(message) {
  return [...message].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})
}