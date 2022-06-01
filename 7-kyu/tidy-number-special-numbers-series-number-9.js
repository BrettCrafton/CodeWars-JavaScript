function tidyNumber(n){
return String(n).split('').sort((a,b)=>a-b).join('')==n
 
}