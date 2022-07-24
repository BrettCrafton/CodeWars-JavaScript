function mazeRunner(maze, directions) {
  let arr = []
  let idx = maze.findIndex(x => x.includes(2))
  let start = [idx, maze[idx].indexOf(2)]
  let coord = function(dir){
    let obj = {
      N: [-1, 0],
      S: [1, 0],
      W: [0, -1],
      E: [0, 1]
      }
    return start.map((x,i)=> obj[dir][i] + x)
    }
 
  directions.forEach((x,i) =>{
    start = coord(x)
      return arr.push(maze[start[0]] ? maze[start[0]][start[1]] : 1)   
  })
  if(arr.includes(3)){
   arr = arr.slice(0, arr.indexOf(3) + 1)
    return arr.every(x => x != 1) ? "Finish" : "Dead"
  }
  else{
    return arr.every(x => x != 1) && arr.every(x => x != undefined) ? "Lost" : "Dead"
  }    
}