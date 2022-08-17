function average(scores) {
  return Math.round(scores.reduce((a, c) => a + c, 0) / scores.length);
}