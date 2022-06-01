function largest(n,xs){
   return n == 0 ? [] : xs.sort((a,b) => a - b).slice(-n);
}