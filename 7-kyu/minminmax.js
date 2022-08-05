function minMinMax(array) {
  let sort = [...new Set(array.sort((a,b) => a -b))]
  return [sort[0], sort[0] + sort.findIndex((x, i) => x - i != sort[0]), sort[sort.length - 1]]
}