function pattern(n){
  let res = []
  for(let i = 0; i < n; i++){
    let el = ""
    let counter = n
    while(counter != i){
      el += String(counter)
      counter--
    }
    res.push(el)
  }
  return res.join("\n")
}