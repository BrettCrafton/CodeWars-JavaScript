function slicesToName(n) {
  return typeof n != "number"? null : n < 2? null : n % 2 == 0? [...Array(n/2)].fill("sandwich").join(" ") : "bread "+ [...Array((n-1)/2)].fill("sandwich").join(" ")
}

function nameToSlices(name) {
  if(typeof name == "string"){ 
    let arr = name.split(" ")
    return arr.length < 2? null :arr[0] != "bread" && arr[0] != "sandwich" ? null : arr.slice(1, arr.length).findIndex(x => x != "sandwich") != -1 ? null : arr[0] == "bread" ? arr.length * 2 -1 : arr.length * 2
    }
  else{
    return null
  }
}

// have fun!