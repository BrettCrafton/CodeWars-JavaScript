function buildPyramidTime(s, k) {
  if(s+k > 15 ){
    return "receive 3000 gold coins"
  }
  else if(s+k > 9 ){
    return "receive 5000 gold coins"
  }
  else{
    return "receive 10000 gold coins"
  }
}