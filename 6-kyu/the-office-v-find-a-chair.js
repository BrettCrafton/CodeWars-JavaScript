function meeting(x, need){
  let arr = []
  let chairs = []
  x.forEach(x => arr.push(x[1] - x[0].length < 0 ? 0 : x[1] - x[0].length))
  let counter = 0
  let copy = need
  while(copy > 0){
    copy-=arr[counter]
    chairs.push(copy < 0 ? arr[counter] + copy : arr[counter])
    counter++
  }
  
  return chairs.length == 0 ? 'Game On' : chairs.reduce((a,c) => a + c, 0) != need  ? 'Not enough!' :  chairs
}