function summy(s){
  return s.split(" ").reduce((a,c) => a + +c, 0)
}