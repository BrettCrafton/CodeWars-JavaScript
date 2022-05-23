function closeCompare(a, b, margin){
  if(margin){
    return Math.abs(a-b) <= margin ? 0 : a-margin < b ? -1 : 1
  }
    else{
  return  a < b ? -1 : a > b ? 1 : 0
      }
}