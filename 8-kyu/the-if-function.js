function _if(bool, func1, func2) {
  console.log(bool)
  return bool != false && bool != 0 && bool != -0 && bool != "" && bool != null && bool != undefined && bool != NaN ? func1() : func2()
}