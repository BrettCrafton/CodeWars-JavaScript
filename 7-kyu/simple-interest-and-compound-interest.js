function interest(P,r,n) {
  let cn = n
  let cp = P
  while(cn){
    cp*=(1+r)
    cn--
  }
  return [Math.round(P * r * n + P), Math.round(cp)]
}