function duckDuckGoose(players, goose) {
  return players[goose%players.length == 0 ? players.length-1 : goose%players.length-1].name;
}