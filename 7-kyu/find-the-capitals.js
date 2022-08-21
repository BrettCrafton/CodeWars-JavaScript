function capital(capitals){
  capitals.forEach(x => x.res = `The capital of ${x.country ? x.country : x.state } is ${x.capital}`)
  return Array(capitals.length).fill().map((_,i) => capitals[i].res)
}