//given an array
//array appears to just be numbers, whole values, no negatives
//also given a number
//also appears whole, positive

function beggars(values, n){
  //clone array as to not mutate, part of request
  //couple different ways to code
  //create an array of arrays(n) - MUST PROPERLY INITIALIZE, else all nested arrays are references to each other
  //loop while clone array has length
  //shift first value to applicable nested array
  //increase counter, but also check that counter is not larger than n
  //then
  //reduce nested arrays 

  if(n == 0){
    return []
  }
  else{
    let arr = values.concat()
    let answer = [...Array(n)].map(() => [])
    let i = 0

    while(arr.length){
      answer[i].push(arr.shift())
      i++
      if(i >= n) i = 0
    }

    for(let p = 0; p < n; p++){
      answer[p] = answer[p].reduce((a,c) => a + c, 0)
    }  
    return answer
  }
}

//return
//an array
//array contains sum of numbers each person gets, if they get nothing, needs to be 0
//if no people, need to return empty array

//   Test.assertDeepEquals(beggars([1,2,3,4,5],1),[15]);
//   Test.assertDeepEquals(beggars([1,2,3,4,5],2),[9,6]);
//   Test.assertDeepEquals(beggars([1,2,3,4,5],3),[5,7,3]);
//   Test.assertDeepEquals(beggars([1,2,3,4,5],6),[1,2,3,4,5,0]);
//   Test.assertDeepEquals(beggars([1,2,3,4,5],0),[]);