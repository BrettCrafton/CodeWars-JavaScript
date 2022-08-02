function sortByValueAndIndex(array){
  return array.map((x,i) => x = {value : x, s : x * (i+1)}).sort((a,b) => a.s-b.s).map(x => x.value)
}