function findOdd(A) {
  let highestCount =[]
  let counts = A.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});  
  for (const key in counts) {
    if (counts[key] % 2 != 0){
      highestCount.push([key],[counts[key]])
    }
  }
  let sortedHighestCount = highestCount.sort((a,b) => a[1] - b[1])
  return Number(sortedHighestCount[0])
}