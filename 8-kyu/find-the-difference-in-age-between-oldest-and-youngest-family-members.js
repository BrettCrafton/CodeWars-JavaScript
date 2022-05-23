function differenceInAges(ages){
  let sortedArr = ages.sort((a, b) => a - b)
  return [sortedArr[0], sortedArr[ages.length - 1], sortedArr[ages.length - 1] - sortedArr[0]]
}