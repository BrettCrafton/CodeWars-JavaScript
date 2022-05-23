var cubeChecker = function(volume, side){
  return (volume<=0 || side<=0) ? false : Math.cbrt(volume) == side ? true : false;
};