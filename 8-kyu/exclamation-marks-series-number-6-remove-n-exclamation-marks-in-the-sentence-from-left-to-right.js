function remove(s,n){
  
  let newString = s;
  for (let i = 0; i < n; i++) {
    newString = newString.replace('!','');
  }
  return newString;
}