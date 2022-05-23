String.prototype.toAlternatingCase = function () {
  let arr = []
   for(let i = 0; i < this.length; i++){
     if(this[i].toLowerCase() === this[i]){
       arr.push(this[i].toUpperCase())
     }
     else{
       arr.push(this[i].toLowerCase())
     }
     }
     return arr.join("")
}