//given an array
//elements in array are numbers, negative positive float?
// array can have length of 0

function findEvenIndex(arr){
  //while loop
    //conditional of
    //slice elements to left and right of i are == || counter == arr.length
    //use reduce to sum both of those sets
    //counter ++ in loop
  //return tern of arr.length == counter || -1
  
  let c = 1
  while(c != arr.length && arr.slice(0,c -1).reduce((a,c) => a+c, 0) != arr.slice(c).reduce((a,c) => a+c, 0) ){
        c++
        }
  return arr.slice(0,c -1).reduce((a,c) => a+c, 0) == arr.slice(c).reduce((a,c)=> a+c, 0) ? c -1 : -1
}

//return 
//an index
//index where left values summed == right values summed
//or -1 if no index that suffices

//     Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
//     Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
//     Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
//     Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");