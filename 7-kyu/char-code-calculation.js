function calc(x){
  return x.split("").map(x => String(x.charCodeAt()).split("")).flat().filter(x => x == 7).length * 6

}