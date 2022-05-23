function changeMe(moneyIn){
  if(moneyIn == "20p"){
    return "10p 10p"
  }
  if(moneyIn == "50p"){
    return "20p 20p 10p"
  }
  if(moneyIn == "£5" || moneyIn == "£2" || moneyIn == "£1"){
    return "20p 20p 20p 20p 20p ".repeat(moneyIn[1]).trim()
  }
  else{
    return moneyIn
  }
  
}