function well(x){
  let sortedx = x.sort().reverse()
  if(sortedx[0] == 'good' && sortedx[1] == 'good' && sortedx[2] == 'good'){
    return "I smell a series!"
  }
  else if(sortedx[0] == 'good' && sortedx[1] == 'good'){
    return "Publish!"
  }
    else if(sortedx[0] == 'good'){
    return "Publish!"
  }
  else{
    return "Fail!"
  }
}