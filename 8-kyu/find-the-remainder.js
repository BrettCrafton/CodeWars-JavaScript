function remainder(n, m){
  if( n == 0 && n < m){
    return NaN
  }
  else if( m == 0 && m < n){
    return NaN
  }
  else{
    return n > m ? n % m : m % n
  }
}