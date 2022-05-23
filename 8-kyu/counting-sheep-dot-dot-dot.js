function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let totalSheep = 0
  arrayOfSheep.forEach((x, i) => {
    if (x == true){
      totalSheep++
    }
  })
  return totalSheep
}