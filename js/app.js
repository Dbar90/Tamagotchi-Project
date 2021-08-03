class Tamagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 1
    this.sleepiness = 1
    this.boredom = 1
    this.age = 0
  }
}

const newTama = new Tamagotchi(name)
console.log(newTama)
