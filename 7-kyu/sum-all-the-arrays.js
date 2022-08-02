function arraySum(arr) {
   return arr.toString().split(',').reduce((a,c) => a+ ( isNaN(+c) ? 0 : +c), 0)
}