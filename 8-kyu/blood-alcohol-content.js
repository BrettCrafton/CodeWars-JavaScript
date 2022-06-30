function bloodAlcoholContent(drinks, weight, sex, time){
  return +(((drinks.ounces*drinks.abv)*5.14/weight*(sex=='male'?.73:.66))-.015*time).toFixed(4)
}