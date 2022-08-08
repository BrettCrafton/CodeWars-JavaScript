function bump(x){
 return [...x].filter(x => x == "n").length < 16 ? "Woohoo!" : "Car Dead"
}