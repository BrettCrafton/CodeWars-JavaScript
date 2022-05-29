function divCon(x){
  return x.reduce((a,c) => a + (typeof c == "number" ? +c : -c), 0)
}