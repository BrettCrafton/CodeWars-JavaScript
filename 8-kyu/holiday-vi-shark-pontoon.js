function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let realSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed 
  return ((pontoonDistance / youSpeed) < (sharkDistance / realSharkSpeed)) ?  'Alive!' : 'Shark Bait!'
}