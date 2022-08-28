function candies(kids){
  return kids.length > 1 ? (Math.max(...kids) * kids.length) - (kids.reduce((a,c) => a + c, 0)) : -1
}