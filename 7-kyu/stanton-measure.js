let stantonMeasure = function (arr){
  return arr.filter(x => x == arr.filter(x => x == 1).length).length
}