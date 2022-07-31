function peak(arr){
  let c = 1
  while(c != arr.length && arr.slice(0,c -1).reduce((a,c) => a+c, 0) != arr.slice(c).reduce((a,c) => a+c, 0) ){
        c++
        }
  return arr.slice(0,c -1).reduce((a,c) => a+c, 0) == arr.slice(c).reduce((a,c)=> a+c, 0) ? c -1 : -1
}