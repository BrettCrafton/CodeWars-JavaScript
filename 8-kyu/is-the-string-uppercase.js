String.prototype.isUpperCase = function() {
  let arr = []
   for(let i = 0; i < this.length; i++){
     if(this[i].toUpperCase() === this[i]){
       arr.push(this[i])
     }
     }
     return this.length == arr.length
  
}