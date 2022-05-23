//given an array
//array contains strings
//appears only strings
//random lengths

//also given an integer
//appears to be only a number, number can be 0, pos, or neg (no floats?)



function longestConsec(strarr, k) {
  //conditional to determine errors or complete array
  
  //code below
  //create an array to hold pushed concated values
  //splice by k, use join, then push into new array
  //can you sort an array by length? worth a try
  //then return shifted (or [0]) value
  //add: to get first instance, use find() where .length is equal to .length of last string in sorted array
  
  //did not delve further
  //new idea, use math instead?
  //figure out length of each string within array, then only concat the one's that are the longest...
  //possible to do this, but issue becomes the concatonated order, "xyz" becomes "zxy" for example
  //induces additional problems
  //this is still possible, but would take finding instances that came first

  if(k > strarr.length || k <= 0 || strarr.length == 0){
    return ""
  }
  else{
    let arr = []
    for(let i = 0; i <= strarr.length - k; i ++){ 
      arr.push(strarr.slice(i, i + k).join(""))
    }
    let sorted = arr.concat().sort((a,b) => a.length - b.length)  
    return arr.find(x => x.length == sorted[sorted.length-1].length)
      
  }
}

//return
//either

//when below or equal to 0, return nothing
//when int is also larger than array length, return nothing
//""

//or 

//longest concated string in the array based on the para, if tied, return first instance, going left to right