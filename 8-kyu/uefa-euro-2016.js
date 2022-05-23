function uefaEuro2016(teams, scores){
  let winner = scores[0] > scores[1] ? teams[0] + " won!" : scores[0] < scores[1] ? teams[1] + " won!": "teams played draw."
  return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}