function countLanguages(list) {
  return list.reduce((a,c) => {
    if(c.language in a){
      a[c.language]++
    } else {
    a[c.language] = 1
    }
    return a
  }, {})
}