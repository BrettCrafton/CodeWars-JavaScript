function sqInRect(l, w){
  let arr = []
  let area = l * w
  if(l == w){
    return null
  }
  else{
      while(area){
        let x = Math.min(l,w)
        arr.push(x)
        area = area - x * x
        w = Math.abs(w - l)
        l = x
      }
    return arr
  }  
}