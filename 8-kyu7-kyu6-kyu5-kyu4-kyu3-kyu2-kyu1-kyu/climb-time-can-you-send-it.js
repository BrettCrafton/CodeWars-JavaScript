function canClimb(ropeLength,climbHeight){
  console.log(arguments)
  if(typeof ropeLength == "number" && typeof climbHeight == "number"){
    return ropeLength * 3.28084 > climbHeight * 2
  }
  else{
    return null
  }
}