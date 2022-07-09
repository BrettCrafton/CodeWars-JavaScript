function averageSquaredInt(arr) {
  let list = arr.filter(x => !String(x).includes(".") && x % 2 == 0 && x > 0)
return Math.round(list.reduce((a,c) => a + (c * c), 0) / list.length) || 0
}