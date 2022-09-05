function countVegetables(string){
  let arr = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"].reverse()
  let obj = string.split(" ").reduce((a,c) => (a[c] = a[c] +1 || 1,a), {})
  return arr.map(x => [obj[x], x]).sort((a,b) => b[0] - a[0]).filter(x => x[0])
}