function order(words){
  let splitArr = words.split(" ")
  let sortedArr = []
  for(let i = 1; i <= splitArr.length; i++ ){
    sortedArr.push(splitArr.filter((x,y) => x.includes(i)))
  }
  return sortedArr.join(' ')
}