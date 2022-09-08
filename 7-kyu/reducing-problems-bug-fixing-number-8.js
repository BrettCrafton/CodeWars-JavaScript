function calculateTotal(team1, team2) {
  if(team1.length && team2.length){
      var t1s = team1.reduce((t, c) => t + c);
      var t2s = team2.reduce((t, c, i) => t + c);
  return t1s > t2s;
  }
else{
  return team1.length? true : false
}
}