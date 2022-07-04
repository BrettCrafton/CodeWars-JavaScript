function replaceNth(text, n, oldValue, newValue) {
  let arr = text.split("")
  let p = 1
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == oldValue && p % n == 0  ){
      arr[i] = newValue
      p++
    }
    else if(arr[i] == oldValue){
      p++
    }
  }
  return n <= 0 ? text : arr.join("")
}