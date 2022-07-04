function sumStrings(a,b) { 
  let arr = []
  let as = a.split("")
  let bs = b.split("")
  let p = 0
  while(as.length || bs.length){
    let al = as.pop()
    let bl = bs.pop()
    if(p != 0){
      al ? al++ :  bl++
      p--
    }
    if(al && bl){
      if((+al + +bl) > 9){
        arr.unshift(String(+al + +bl - 10))
        p++
        }
      else{
          arr.unshift(String(+al + +bl))
        }
      }
    if(al && !bl){
      if(al > 9){
        arr.unshift("0")
        p++
        }
      else{
          arr.unshift(al)
        }
    }
    if(bl && !al){
      if(bl > 9){
        arr.unshift("0")
        p++
        }
      else{
        arr.unshift(bl)
        }
    }
  }
  return p? "1" + arr.join("") : arr.join("").replace(/^0+/, '')
}