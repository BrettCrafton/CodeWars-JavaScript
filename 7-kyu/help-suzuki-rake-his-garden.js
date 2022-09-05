function rakeGarden(garden) {
  return garden.split(" ").map(x=>x=="rock"?x:"gravel").join(" ");
}