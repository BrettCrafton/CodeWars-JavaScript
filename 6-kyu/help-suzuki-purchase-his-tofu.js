function buyTofu(cost,box){
  let arr = box.split(" ")
  let mon = arr.filter(x => x == "mon").length
  let monme = arr.filter(x => x == "monme").length
  let sum = monme * 60 + mon
  let coinsMonme = Math.floor(cost/60)
  let coinsMon = cost % 60
  console.log(coinsMon)
  console.log(coinsMonme)
  console.log(mon)
  console.log(monme)
  
  return mon >= coinsMon && monme >= coinsMonme ? [mon, monme, sum, coinsMonme + coinsMon ] : (monme * 60 >= cost ? coinsMonme * 60 : monme * 60 ) + mon >= cost ? [mon, monme, sum, monme + (cost - (monme * 60) )  ] : "leaving the market"
}