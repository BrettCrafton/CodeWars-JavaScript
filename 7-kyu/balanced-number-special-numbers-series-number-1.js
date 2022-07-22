function balancedNum(number){
    let str = String(number)
    let left = str.length % 2 ? str.slice(0, Math.floor(str.length/2)).split("") : str.slice(0, Math.floor(str.length/2) -1).split("")
    let right = str.length % 2 ? str.slice(-Math.floor(str.length/2)).split("") : str.slice(-Math.floor(str.length/2) + 1).split("")
    if(str.length > 2){
      return left.reduce((a,c) => a+ +c, 0) == right.reduce((a,c) => a+ +c, 0) ? 'Balanced' : 'Not Balanced'
    }
    else{
      return 'Balanced'
    }
}