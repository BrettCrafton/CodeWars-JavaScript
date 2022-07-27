function checkThreeAndTwo(array) {
  let unique = [...new Set(array)]
  return unique.length == 2 && array.filter(x => x == unique[0]).length >= 2 && array.filter(x => x == unique[1]).length >= 2
}