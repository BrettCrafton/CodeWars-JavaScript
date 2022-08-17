function findScreenHeight(width, ratio) {
    let r = ratio.split(':')
    return `${width}x${width/r[0]*r[1]}`    
}