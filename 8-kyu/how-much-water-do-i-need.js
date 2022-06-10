function howMuchWater(water, load, clothes){
  if(clothes < load){
    return 'Not enough clothes'
  }
  else if(clothes > load * 2){
    return 'Too much clothes'
  }
  else{
    for(let i = load; i < clothes; i++){
      water *= 1.1
    }
    return +water.toFixed(2)
  } 
}