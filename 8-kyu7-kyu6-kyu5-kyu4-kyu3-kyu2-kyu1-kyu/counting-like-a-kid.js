function  kidoCount(n){
  
return [...Array(Math.ceil(n/2))].map((x,i) => i * 2 + 1)
}