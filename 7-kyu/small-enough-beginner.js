function smallEnough(a, limit){
  return !a.find(x=>x>limit);
}