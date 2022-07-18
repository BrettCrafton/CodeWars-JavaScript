var nbrOfLaps = function (x, y) {
  let dist = x
  while((dist / y) % 1){
    dist+=x
  }
  return [dist/x, dist/y];
}