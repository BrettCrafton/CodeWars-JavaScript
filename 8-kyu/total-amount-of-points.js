function points(games) {
    let totalWins = 0, totalTies = 0, totalLoses = 0
    let xPoints = games.join(":").split(":").filter((x,i) => i%2 == 0)
    let yPoints = games.join(":").split(":").filter((x,i) => i%2 != 0)
    for(let i = 0; i <= xPoints.length - 1; i++){
      if(xPoints[i] > yPoints[i]){
        totalWins++
      }
      else if(xPoints[i] == yPoints[i]){
        totalTies++
      }
      else{
        totalLoses++
      }
    }
   return totalWins * 3 + totalTies
}