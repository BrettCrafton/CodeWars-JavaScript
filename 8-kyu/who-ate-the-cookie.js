function cookie(x){
  let cookieEater = typeof x == "string"? "Zach" : typeof x == "number" ? "Monica" : "the dog"
  return `Who ate the last cookie? It was ${cookieEater}!`
}