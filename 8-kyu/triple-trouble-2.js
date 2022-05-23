function tripleTrouble(one, two, three){
  return [...Array(one.length)].map((x, i) => x = one[i] + two[i] + three[i]).join('')
 }