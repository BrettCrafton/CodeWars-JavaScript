function solution(list){
  let p = 1
  for(let i = 0; i < list.length; i++){
    if(list[i] == list[i + 1] -1 && list[i] == list[i+2] - 2){
      while(list[i] == list[i + p] - p){
        p++
      }
      list.splice(i, p, list[i] + "-" + (list[i] + p -1))
      p = 1   
    }
  }
  return list.join(",")
}