function opposite(n, a, a2){
    let arr = []
    while(arr.length != n){
      arr.push(a)
      if(arr.length != n)arr.push(a2)
    }
    return arr
  }