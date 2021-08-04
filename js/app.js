class Tamagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 1
    this.sleepiness = 1
    this.boredom = 1
    this.age = 0
    this.timeAlive = 0
    this.dead = false
  }
  feedPet() {
    let button1 = document.querySelector('#feed')
    button1.addEventListener('click', (event)=> {
      this.hunger--
      document.querySelector('#hunger').innerText = `${this.hunger}`
    })
  }
  play() {
    let button2 = document.querySelector('#play')
    button2.addEventListener('click', (event)=> {
      this.boredom--
      document.querySelector('#boredom').innerText = `${this.boredom}`
    })
  }
  goodNight() {
    let button3 = document.querySelector('#lightsout')
    button3.addEventListener('click', (event)=> {
      this.sleepiness--
      document.querySelector('#sleepiness').innerText = `${this.sleepiness}`
    })
  }
}


const newTama = new Tamagotchi(name)
console.log(newTama)
newTama.feedPet()
newTama.play()
newTama.goodNight()
console.log(newTama)
