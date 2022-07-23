function automorphic(n){
  return String(n*n).slice(-(String(n).length)) == n ? 'Automorphic' : 'Not!!';
}