function golfScoreCalculator(parList, scoreList){
  return parList.split("").map((x,i) => scoreList.split("")[i] - x).reduce((a,c) => a+c,0)
}