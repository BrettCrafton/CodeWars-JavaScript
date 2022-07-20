function allContinents(list) {
  let continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  let locations = list.map(x => x.continent)
  return continents.every(x => locations.includes(x))
}