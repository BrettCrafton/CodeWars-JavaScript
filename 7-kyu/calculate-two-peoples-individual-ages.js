function getAges(sum,difference){
  let arr = [sum / 2 + difference / 2, sum / 2 - difference / 2]
  return sum < 0 || difference < 0 || arr.some(x => x < 0) ? null : arr
};