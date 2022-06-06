var hotpo = function(n){
  console.log(n)
    let counter = 0
    if(n == 0 || n ==1) return 0;
    
    else{
      while(n != 1){
      if(n % 2 == 0) {
        n = n / 2
        counter++
        console.log("even")
        console.log(n)
      }
        
      else if(n % 2 != 0) {
        n = 3 * n + 1
        counter++
        console.log("odd")
        console.log(n)
        }
      }
      return counter
    }
}