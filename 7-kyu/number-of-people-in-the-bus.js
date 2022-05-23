var number = function(busStops){
  // Good Luck!
  return busStops.reduce((curStop, nextStop) => curStop + nextStop[0] - nextStop[1], 0)
}var number = function(busStops){
  // Good Luck!
  //   let splitArray = busStops.flat('2')
  //   let stillOnBus = splitArray.reduce((a, b, i) => i % 2 == 0 ? a + b : a - b)
  
  return busStops.flat('2').reduce((a, b, i) => i % 2 == 0 ? a + b : a - b)
}