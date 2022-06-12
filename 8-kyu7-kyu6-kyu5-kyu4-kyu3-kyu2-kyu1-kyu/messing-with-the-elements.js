function elShuffle(arr1,arr2){
  if(arr2[1] <= arr1.length)arr1.splice(arr2[1], 1, arr2[0])
  return arr1
}