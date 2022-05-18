function whoseMove(lastPlayer, win) {
  return win == true ? lastPlayer : win == false && lastPlayer == 'white' ? "black" : "white"
}