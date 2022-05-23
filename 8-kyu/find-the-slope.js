//parameters - given an array, contains 4 integers
//[a,b,c,d] representing (a,b) (c,d)
//all array values are integers, with no float

function slope(p){
  //pseudo
  //pull values out of array
  //input values into formula
  //return resulting slope as string
  
  //better practices
//   let points = p
//   let y1 = points[0]
//   let x1 = points[1]
//   let y2 = points[2]
//   let x2 = points[3]
//   //slope = rise/run or x2 - x1 / y2 - y1
//   let slope = (x2 - x1) / (y2 - y1)
//   console.log(points)
//   console.log((y2 - y1) == 0  ? "undefined"  : slope + "")
//   return (y2 - y1) == 0  ? "undefined"  : slope + ""
  
//single line
   return  (p[2] - p[0]) == 0 ? "undefined" : ((p[3] - p[1]) / (p[2] - p[0])) + ""
  
}

//return - function return, is a string representing slope of the line between the two points
// if division by 0 (undefined slope), return "undefined" - as lower case only, and a string

//slope = rise/run or x2 - x1 / y2 - y1

//examples
// slope([1,2,3,4])//1
// slope([10,20,30,40])//1
// slope([2,7,4,-7])//-7