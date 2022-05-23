//given height in meters, number, can be 0  or negative
//bounce, also a number, must be greater 0 and less 1
//window = appears set at 1.5

function bouncingBall(h,  bounce,  window) {
  //conditional if meets parameters, otherwise -1
  //loop
    //take h
    //loop through h multiply by bounce until less than window
  //let final result == counter * 2 plus 1, initial fall, plus bounce and fall per time it rises to window
  
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window > h){
    return -1
  }
  else{
    let counter = 0
    let height = h
   while(height > window){
     height *= bounce
     counter++
   }
    return counter * 2 - 1
  }
}

//return 

// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// return 0 otherwise

//return number of times ball bounces above window (strickly greater)


// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1