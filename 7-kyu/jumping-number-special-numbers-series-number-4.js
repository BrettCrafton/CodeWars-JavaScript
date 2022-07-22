function jumpingNumber(n){
  if(n > 9){
    return  String(n).split("").map((x, i, arr) => Math.abs(x - arr[i-1])).slice(1).some(x => x != 1) ? 'Not!!' : 'Jumping!!'
  }
  else{
    return "Jumping!!"
  }
}