function sameCase(a, b){
  a = a.replace(/[^a-zA-Z]/g, '')
  b = b.replace(/[^a-zA-Z]/g, '')
  if(a == "" || b == ""){
    return -1
  }
  else{
    return a.toLowerCase() == a && b.toLowerCase() == b ? 1 : a.toUpperCase() == a && b.toUpperCase() == b ? 1 :  0 
  }
}