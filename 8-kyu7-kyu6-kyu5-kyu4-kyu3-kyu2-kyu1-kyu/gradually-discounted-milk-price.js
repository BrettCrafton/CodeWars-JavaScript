function milkPrice(litres, pricePerLitre) {
  let pricing = pricePerLitre
  let total = 0
  for(let i = 1; i < litres; i+= 2){
    pricing -= .05
    total += pricing * 2
  }
    return  litres < 1 ? +(Math.round(litres * pricePerLitre * 100)).toFixed(2) /100 : litres % 2 ? +(total + pricing).toFixed(2)  : +total.toFixed(2)
}