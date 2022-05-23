function formatDuration (numberSeconds) {
  let seconds = numberSeconds % 60
  let minutes = Math.floor((numberSeconds - seconds)/60 % 60 )
  let hours = Math.floor((numberSeconds - minutes - seconds)/3600 % 24 )
  let days = Math.floor((numberSeconds - minutes - seconds - hours)/86400 % 365 )
  let years = Math.floor((numberSeconds - minutes - seconds - hours - days)/31536000 % 365 )
 
  let timeArr = [years, days, hours, minutes, seconds]
  let wordArr = ["year", "day", "hour", "minute", "second"]
  let arr = [] 
  
  function createTime(arr1, arr2){
    for(let i = 0; i <= 4; i++){
      if(arr1[i] > 1){
        arr.push(arr1[i])
        arr.push(arr2[i] + "s")
        }
      if (arr1[i] == 1){
        arr.push(arr1[i])
        arr.push(arr2[i])
      }
    }
  }
  
  function addComma(){
    for(let i = 1; i < arr.length - 3; i +=2){
              arr[i] = arr[i] + ","
            }
    return arr.slice(0, arr.length - 2).join(" ") + " and " + arr.splice(-2).join(" ")
  }
  
  function createString(){
    return  arr.length == 0 ? "now" : 
            arr.length == 2 ? arr.join(" ") :
            arr.length < 5 ? arr.slice(0, arr.length - 2).join(" ") + " and " + arr.splice(-2).join(" ")  :
            addComma()
  }
  
  createTime(timeArr, wordArr)
  return createString()
}