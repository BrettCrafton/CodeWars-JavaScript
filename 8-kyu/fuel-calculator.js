function fuelPrice(litres, pricePerLitre) {
  let price = 0
  if(litres < 2){
    price = litres * (pricePerLitre) 
  }
  else if(litres < 4){
    price = litres * (pricePerLitre - .05)
  }
    else if(litres < 6){
    price = litres * (pricePerLitre - .10)
  }
    else if(litres < 8){
    price = litres * (pricePerLitre - .15)
  }
    else if(litres < 10){
    price = litres * (pricePerLitre - .20)
  }
    else{
    price = litres * (pricePerLitre - .25)
  }
  return +price.toFixed(2)
}