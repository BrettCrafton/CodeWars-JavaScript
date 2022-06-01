function maxGap (numbers){
  let arr = []
  let sorted = numbers.sort((a,b) => a - b)
  for(let i = 0; i < sorted.length; i++){
    arr.push(sorted[i + 1] - sorted[i])
  }
  arr.pop()
  return Math.max(...arr)
}