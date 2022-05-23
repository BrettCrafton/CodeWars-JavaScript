function powersOfTwo(n){
    let arr=[1]
    for(let i=1; i<=n; i++){
    arr.push(Math.pow(2,i))
    }
    return arr
}
