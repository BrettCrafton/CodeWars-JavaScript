//create function towerBuilder
//given a positive number, whole as arguement
//no other inputs


function towerBuilder(nFloors) {
  //easiest method sounds like loop
  //for loop less than nFloors
  //bottom most floor with have (n * 2 -1) characters of *, all floors have this length
  //new line for each string
  //build a dual counter, one going down till 0, and one going up otherwise, use these counts to change charat or [] to *
  //set topfloor length to above with middle char as * for top
  let firstFloor = new Array(nFloors == 1 ? 1 : (nFloors * 2 - 1)).fill(" ")
  let d = nFloors - 1
  firstFloor[d] = "*"
  let currentFloor = firstFloor
  let tower = [firstFloor.join("")]
  for(let i = d -1; i >= 0; i--){
    d++
    currentFloor[d] = "*"
    currentFloor[i] = "*"
    tower.push(currentFloor.join(""))
  }
  return tower
}

//return 
//an array of strings
//a tower, created with * character
//number of strings equal to the arguements number of floors
//tower grows like pyramid till bottom is filled with *


//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"