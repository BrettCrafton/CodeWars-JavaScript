function askForMissingDetails(list) {
  let filt = list.filter(x => Object.values(x).includes(null))
  filt.forEach(x => x.question = `Hi, could you please provide your ${Object.keys(x).find(e => x[e] === null )}.`)
  return filt
}