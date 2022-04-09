const reverseSeq = n => {
    let arr = []
    for(i = 1; i <= n; i++){
      arr.unshift(i)
    }
    return arr
  };