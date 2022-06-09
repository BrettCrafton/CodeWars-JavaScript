function tug_o_war(teams) {
  console.log(teams)
  let winner
  teams[0].reduce((a,c) => a + c, 0) > teams[1].reduce((a,c) => a + c, 0) ? winner = "Team 1 wins!" : 
  teams[0].reduce((a,c) => a + c, 0) < teams[1].reduce((a,c) => a + c, 0) ? winner = "Team 2 wins!" :
  winner = 0
  if(winner == 0){
     teams[0][0] > teams[1][teams[1].length - 1] ? winner = "Team 1 wins!" :
     teams[0][0] < teams[1][teams[1].length - 1] ? winner = "Team 2 wins!" :
     winner = "It's a tie!"
  }
  return winner
}