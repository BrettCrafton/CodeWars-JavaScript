function isOpposite(s1,s2){
  if(s1 == ""){
    return false
  }
  if(s1.toLowerCase() == s2.toLowerCase()){
    let arrs1 = s1.split("")
    let arrs2 = s2.split("")
    for (let i = 0; i < arrs1.length; i++) 
        if (arrs1[i] == arrs2[i]) {
            return false}
    else{return true}
  }
  else{
    return false
  }
}