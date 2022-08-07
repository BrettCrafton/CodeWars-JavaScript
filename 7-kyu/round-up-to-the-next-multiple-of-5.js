function roundToNext5(n){
  return  n > 0 ? n + (n % 5 ? 5 - n%5: 0 ) : n - n % 5 
}