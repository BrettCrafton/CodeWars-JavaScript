function allNonConsecutive (arr) {
 return arr.filter((x,i, arr) => x != arr[i-1]+1 && i != 0 ).map(x => x = {"i":arr.indexOf(x), "n":x} )
}