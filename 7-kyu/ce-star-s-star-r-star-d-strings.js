function uncensor(infected, discovered) {
  infected = infected.split("")
  discovered = discovered.split("")
  while(discovered.length){
    infected[infected.indexOf("*")] = discovered.shift()
  }
  return infected.join("")
}