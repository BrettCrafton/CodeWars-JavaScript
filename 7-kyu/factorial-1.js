function factorial(n){
    return Array(n).fill().map((x,i) => i +1 ).reduce((a,c) => a * c, 1)
}