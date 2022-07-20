function findOddNames(list) {
  return list.filter(x => x.firstName.split("").map(x => x.charCodeAt()).reduce((a,c) => a+c,0) % 2 )
}