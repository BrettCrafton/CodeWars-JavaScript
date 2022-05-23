function spinWords(string){
  let splitArr = string.split(" ")
  let reversedArr = []
  let reversePara = splitArr.forEach((x, i)=> {
    if(x.length > 4){
    reversedArr[i] = x.split('').reverse().join("")
      }
    else{
    reversedArr[i] = x
    }
    })
return reversedArr.join(' ')
}
// .split('').reverse().join("")