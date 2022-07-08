function isNormal(n){
  console.log(n)
  if(n < 1) return false
  else if( n == 3 || n == 5 || n == 7)
    {
      return true
    }
  else{
      return n % 3 != 0 && n % 5 != 0 && n % 7 != 0
     }
}