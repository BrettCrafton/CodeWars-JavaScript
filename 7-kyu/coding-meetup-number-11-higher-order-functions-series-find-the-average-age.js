function getAverageAge(list) {
  let ages = list.map(x => x.age)
  return Math.round(ages.reduce((a,c) => a+c, 0)/ages.length)
}