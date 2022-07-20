function isAgeDiverse(list) {
  let generations = [
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]
  let ages = list.map(x => x.age > 99 ? 100 : Math.floor(x.age / 10) * 10  )
  return generations.every(x => ages.includes(x))
}