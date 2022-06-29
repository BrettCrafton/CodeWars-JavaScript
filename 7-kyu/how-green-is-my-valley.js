function makeValley(arr) {
  let answer = []
  arr = arr.sort((a,b) => b-a)
  while(arr.length){
    answer.unshift(arr.pop())
    if(arr.length)answer.push(arr.pop())
  }
  return answer.length % 2 ? answer : answer.reverse()
}