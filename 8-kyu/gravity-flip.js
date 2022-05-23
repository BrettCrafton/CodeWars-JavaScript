const flip=(d, a)=>{
  return d=='L' ? a.sort((a,b)=>b-a) : a.sort((a,b)=>a-b)
}