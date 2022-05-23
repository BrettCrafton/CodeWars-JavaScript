function fakeBin(x){
return String(x.split('').map((x,y) => x < 5? 0: 1).join(''))
}