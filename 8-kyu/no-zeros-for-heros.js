function noBoringZeros(n) {
  let splitRevArr = String(n).split('').reverse()
  return splitRevArr[0] != 0 ? n : Number(splitRevArr.splice(splitRevArr.findIndex(x => x != 0), (splitRevArr.length - 1)).reverse().join(""))
}