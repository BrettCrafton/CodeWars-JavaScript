function solve(arr){
  let res = []
  arr.sort((a,b) => a-b)
  let length = arr.length /2
  for(let i = 0; i < length; i++){
    if(arr.length){
      res.push(arr.pop())
    }
    if(arr.length)
      res.push(arr.shift())
  }
    return res
};