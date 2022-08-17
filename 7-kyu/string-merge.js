function stringMerge(s1, s2, l){
  
  return s1.split(l)[0] + s2.slice(s2.indexOf(l))
}