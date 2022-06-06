function firstToLast(str,c){
  return str.includes(c)?str.slice(str.indexOf(c) , str.lastIndexOf(c)).length: -1 
}