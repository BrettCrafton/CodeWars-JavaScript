// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
ages.sort((a,b) =>  a - b)
  return [ages[ages.length-2],ages[ages.length-1]] 
}