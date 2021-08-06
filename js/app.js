class Tamagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 1
    this.sleepiness = 1
    this.boredom = 1
    this.level = 1
  }
  feedPet() {
    let button1 = document.querySelector('#feed')
    button1.addEventListener('click', (event)=> {
      this.hunger-=2
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
  gameTime() {
    const metricsUp = setInterval(()=> {
      this.hunger+=3
      this.sleepiness++
      this.boredom+=2
      document.querySelector('#hunger').innerText = this.hunger
      document.querySelector('#sleepiness').innerText = this.sleepiness
      document.querySelector('#boredom').innerText = this.boredom
      if (this.hunger >= 15) {
        clearInterval(metricsUp)
        alert(`${newTama} has starved to death!`)
       }
      if (this.sleepiness >= 15) {
        clearInterval(metricsUp)
        alert(`${newTama} has died from exhaustion!`)
      }
      if (this.boredom >= 15) {
        clearInterval(metricsUp)
        alert(`${newTama} has died of pure boredom!`)
      }
    }, 2000)
   }
  levelUp() {
    const levelUp = setInterval(()=> {
      this.level++
      document.querySelector('#level').innerText = this.level
      if (this.hunger >= 15) {
        clearInterval(levelUp)
      }
      if (this.sleepiness >= 15) {
        clearInterval(levelUp)
      }
      if (this.boredom >= 15) {
        clearInterval(levelUp)
      }
    }, 5000)
  }
  evolve() {
    if (this.level === 4) {
      document.querySelector('#pic').setAttribute('src', "img1")
    }
  }
}


const newTama = new Tamagotchi(name)

newTama.gameTime()
newTama.levelUp()
newTama.feedPet()
newTama.play()
newTama.goodNight()
newTama.evolve()

console.log(newTama)
