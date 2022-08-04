var getQuote = function(quotes, hero){
  return (hero[0] == "R" ? "Robin" : hero[0] == "B" ? "Batman" : "Joker") + ": " + quotes[hero.split("").find(x => x < 10)]
}