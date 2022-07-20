function specialNumber(n){
  return String(n).split("").some(x => x > 5) ? 'NOT!!' : 'Special!!'
}