function raceAnalysis(arr,x) {
  let res = Array(x).fill("DNF").map((x,i) => !arr[i] ? "DNF" : arr[i] >= i + 1 ? "+" + (arr[i]  -i - 1) : "" + (arr[i]-i-1))
  if(res.every(x => x == "+0")){
    return "Boring Race"
  }
  else if(res.every(x => x == "DNF")){
    return "What A Disaster!!"
  }
  else{
    return res
  }
}