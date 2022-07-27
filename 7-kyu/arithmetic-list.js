var seqlist = function(first,c,l){
  return Array(l).fill(first).map((x,i) => x + (i * c))
}