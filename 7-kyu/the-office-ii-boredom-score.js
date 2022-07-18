function boredom(staff){
let dept = {
"accounts": 1,
"finance": 2,
"canteen": 10,
"regulation": 3,
"trading": 6,
"change": 6,
"IS": 8,
"retail": 5,
"cleaning": 4,
"pissing about": 25
}

let total = Object.values(staff).reduce((a,c) => a + dept[c], 0)
return total <=80 ? 'kill me now' : total < 100 ? 'i can handle this' : 'party time!!'
}