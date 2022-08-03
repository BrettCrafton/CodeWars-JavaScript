function strCount(obj){
  if(Object.values(obj).some(x => Array.isArray(x) || typeof x == "object" && x != null)){
     obj = Object.values(obj).flat(Infinity).map(x => x == null ? x : typeof x == "object" ? Object.values(x) : x)
    return strCount(obj)
  }
  else{
    return Object.values(obj).filter(x  => typeof x == "string").length
  }
}