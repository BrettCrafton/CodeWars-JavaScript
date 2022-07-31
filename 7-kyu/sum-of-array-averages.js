const sumAverage = (arr) => {
  return Math.floor(arr.map(x => x.reduce((a,c) => a+c, 0)/x.length ).reduce((a,c) => a+c, 0))
}