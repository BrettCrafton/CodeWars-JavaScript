function counterEffect(hitCount) {
  return [...hitCount].map(x => Array(+x +1).fill().map((x,i) => i) )
}