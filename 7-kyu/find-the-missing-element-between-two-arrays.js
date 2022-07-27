function findMissing(arr1, arr2) {
  arr2 = arr2.sort((a,b) => a-b)
  return arr1.sort((a,b) => a-b).find((x,i) => x != arr2[i]) 
}