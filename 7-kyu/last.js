function last(list){
  console.log(list)
  return [...arguments].length < 2 ? list[list.length-1] || list : [...arguments].pop()
}