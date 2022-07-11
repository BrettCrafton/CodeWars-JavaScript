function checkWinner(pC, oC, I) {
  return !pC.stats[I] || !oC.stats[I]  ? "invalid" : pC.stats[I] > oC.stats[I] ? "player" : pC.stats[I] < oC.stats[I] ? "opponent" : "tie"  
}