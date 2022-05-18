function infiniteLoop(arr,d,n){
  function shiftRight(arr){
    arr.forEach((x, i) =>x.unshift(arr[i == 0 ? arr.length -1 : i - 1].pop()))
  }
  function shiftLeft(arr){
    arr.forEach((x, i) =>x.push(arr[i == arr.length - 1 ? 0 : i + 1].shift()))
  }
  if(d == "left"){
    for(let i = 0; i < n; i++){
    shiftLeft(arr)
      }
  }
  if(d == "right"){
    for(let i = 0; i < n; i++){
    shiftRight(arr)
      }
    }
  return arr
}
// arr[0][arr[0].length-1].pop()