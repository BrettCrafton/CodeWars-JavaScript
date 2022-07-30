function leastLarger(a,i) {
  let larger = a.filter(x => x > a[i])
  return larger.length? a.indexOf(Math.min(...larger)) : -1
}