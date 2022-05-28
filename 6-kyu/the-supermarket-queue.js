function queueTime(customers, n) {
  if(customers.length == 0){
    return 0
  }
  else{
  let tills = customers.splice(0, n)
  while(customers.length){
    tills[tills.indexOf(Math.min(...tills))] += customers.shift()
  }
  return  Math.max(...tills)
  }
}//given an array
//contains only positive numbers
//numbers equal to amount of time to "checkout"

//also given an integer n
//n is the number of "tills" open
//will only be postive

//does not specify whole numbers for either parameter


function queueTime(customers, n) {
  //splice array to n and set equal to variable
  //while loop, while customers.length != 0
  //add shift of customers to math.min of array 
  //then return math.max of array
  if(customers.length == 0){
    return 0
  }
  else{
  let arr = customers.splice(0, n)
  while(customers.length != 0){
    arr.push(arr.sort((a,b) => b-a).pop() + customers.shift())
  }
  return  Math.max(...arr)
  }
}

//return
//a number
//equal to the amount of time to complete the queue

// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12