function array(arr){
  let splitArr = arr.split(",")
return splitArr.length <= 2 ? null : splitArr.splice(1, splitArr.length -2).join(" ")
}