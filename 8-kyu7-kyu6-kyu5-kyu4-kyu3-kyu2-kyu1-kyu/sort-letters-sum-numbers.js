function sortAndSum() {
  let arr = [...arguments].sort()
  let num = arr.filter(x => typeof x == 'number')
 return arr.filter(x => typeof x == 'string').concat(num.reduce((a,c) => a + c, 0))
}