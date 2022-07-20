function findSenior(list) {
  let ages = Math.max(...list.map(x => x.age))
  return list.filter(x => x.age == ages )
}