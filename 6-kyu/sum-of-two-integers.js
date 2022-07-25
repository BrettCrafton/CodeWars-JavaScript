function add(x, y){
  if(x < 0 && y < 0){
    //why not
    return Math.round(Math.pow(Math.hypot(Math.sqrt(Math.abs(x)),Math.sqrt(Math.abs(y))), 2)) * ~1 / 2
  }
  else if(x < 0 ^ y < 0){
    //or do what they wanted you to do from the begining and use bitwise operators as this works for all values of x, y
    return Add(x, y)
  }
  else{
    //why not
    return Math.round(Math.pow(Math.hypot(Math.sqrt(x),Math.sqrt(y)), 2))
  }
    
}
function Add(x, y)
{
    if (y == 0)
        return x;
    else
        return Add(x ^ y, (x & y) << 1);
}