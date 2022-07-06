function excludingVatPrice(price){
  console.log(price)
  return price == null ? -1 : +(price / 1.15).toFixed(2)
}