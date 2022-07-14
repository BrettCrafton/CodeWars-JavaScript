function scoreOfDive(scores, tariff) {
  return (scores.sort((a,b) => a-b).slice(2, 5).reduce((a,c) => a + c, 0) * tariff).toFixed(2)
}