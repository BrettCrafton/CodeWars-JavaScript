function defineSuit(card) {
  return  card.endsWith("♠") ? "spades":
          card.endsWith("♦") ? "diamonds":
          card.endsWith("♥") ? "hearts":
          "clubs"
}