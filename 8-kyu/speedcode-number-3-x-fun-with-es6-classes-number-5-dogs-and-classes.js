class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender)
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}