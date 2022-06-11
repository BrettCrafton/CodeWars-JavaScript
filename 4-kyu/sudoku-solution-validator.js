function validSolution(board){
  let result = true
  //deep copy board
  let copy = JSON.parse(JSON.stringify(board))
  //create function for finding duplicates in an array (since values can only be 0-9)
  let test = function(arr){
    return [...new Set(arr)].length
  }
  //test for 0
  if([].concat(...board).includes(0)){
    result = false
  }
  else{
    for(let i = 0; i < 9; i++){
      let arr = []
      //test for row 1-9
      if(test(board[i]) != 9) result = false
      copy.forEach(x => arr.push(x.pop()) )
      //test for column 1-9
      if(test(arr) != 9) result = false  
      
    }    
  }  
  
  //test for 3x3
  let copy2 = JSON.parse(JSON.stringify(board))
  
  let counter = 2
  while(copy2[8].length){
    let squareTest = function (){
      let x3 = []
      x3.push(copy2[counter - 2].splice(0, 3))
      x3.push(copy2[counter - 1].splice(0, 3))
      x3.push(copy2[counter].splice(0, 3))
      if(test([].concat(...x3)) != 9) result = false 
    }
    squareTest()
    squareTest()
    squareTest()

    counter += 3
  }
  
  return result
}