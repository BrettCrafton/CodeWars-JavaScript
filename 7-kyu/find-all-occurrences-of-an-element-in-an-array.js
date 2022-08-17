const findAll = (array, n) => {
  return array.map((x,i)=> x==n ? i : null).filter(x=> x!=null)
}