//given an array
//only array it appears
//length will always be mult of 8
//doesn't appear to matter what is in them, shows 1 and 0s

function dataReverse(data) {
  //create holder array
  //copy input array
  
  //loop seems obvious way
  //splice looks to be easiest method
  //loop till array.length == 0?
  //push splice contents into new array,
  //return holder array
  let arr = []
  let dataCopy = data.concat()
  
  while(dataCopy.length != 0){
    arr.push(dataCopy.splice(-8, 8))
  }
  return arr.flat()
}

//return
//array, reversed, in bits of 8
//needs to be returned as 1 flat array