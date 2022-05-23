function none(arr, fun){
  return arr.map(x => fun(x)).every(x => x == false)
}