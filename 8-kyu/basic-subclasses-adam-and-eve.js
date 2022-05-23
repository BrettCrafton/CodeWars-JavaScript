class God{
constructor(){
  
}
  static create(){
    return [adam, eve]
  }
}
class Human{
  constructor(name){
    this.name = name
  }
}
class Man extends Human{  
}
class Woman extends Human{
}
let adam = new Man("Adam")
let eve = new Woman("Eve")