function stairsIn20(s){
  return s.flat().reduce((a,c)=>a+c, 0) * 20
}