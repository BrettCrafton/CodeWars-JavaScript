function expandedForm(num) {
  let arr =String(num).split(".")
  arr[0] = arr[0].split("").map((num, index, arr) => num + "0".repeat(arr.length - index -1 )).filter((num) => Number(num) != 0).join(" + ")   
  arr[1] = arr[1].split("").map((num, index, arr) => num + "/10" + "0".repeat(index)).filter((num) => num.charAt(0) != "0").join(" + ")       
  return arr[0] ? arr.join(" + ") : arr[1]
}