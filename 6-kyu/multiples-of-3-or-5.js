function solution(number){
  let arr = []
  if(number < 0){
    return 0
  } 
  else { 
     for(let i = 1; i < number; i++){
       i % 3 == 0 || i % 5 == 0 ? arr.push(i) : arr.push(0)
     }
       return arr.reduce((a,b) => a+b, 0)
   }
}