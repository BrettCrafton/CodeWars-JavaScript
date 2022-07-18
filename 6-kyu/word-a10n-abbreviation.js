function abbreviate(string) {
  return string.split(" ").map(x =>{
    if(x.includes("-")){
     return x.split("-").map(x => x[0] + (x.length -2) + x[x.length-1]).join("-")
    }
    else if(x.includes(",") && x.length > 4){
     return x[0] + (x.length -3) + x[x.length-2] + ","
     }
    else{
     return x.length > 3 ? x[0] + (x.length -2) + x[x.length-1] : x
    }
  }).join(" ")
}