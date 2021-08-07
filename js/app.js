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
      document.querySelector('#hunger').innerHTML = this.hunger
    })
  }
  play() {
    let button2 = document.querySelector('#play')
    button2.addEventListener('click', (event)=> {
      this.boredom--
      document.querySelector('#boredom').innerHTML = this.boredom
    })
  }
  goodNight() {
    let button3 = document.querySelector('#lightsout')
    button3.addEventListener('click', (event)=> {
      this.sleepiness--
      document.querySelector('#sleepiness').innerHTML = this.sleepiness
      document.querySelector('#image').style.backgroundColor = 'black'
    })
  }
  levelUp() {
    const levelUp = setInterval(()=> {
      this.level++
      let morph = document.querySelector('#pic')
      if (this.level >= 4) {
        morph.setAttribute('src', 'image/charmeleon.png')
      }
      if (this.level >= 8) {
        morph.setAttribute('src', 'image/Charizard.png')
      }
      document.querySelector('#level').innerHTML = this.level
      if (this.hunger >= 15) {
        clearInterval(levelUp)
        morph.setAttribute('src', 'image/dead.png')
      }
      if (this.sleepiness >= 15) {
        clearInterval(levelUp)
        morph.setAttribute('src', 'image/dead.png')
      }
      if (this.boredom >= 15) {
        clearInterval(levelUp)
        morph.setAttribute('src', 'image/dead.png')
      }
    }, 1000)
  }
  gameTime() {
    const metricsUp = setInterval(()=> {
      this.hunger+=3
      this.sleepiness++
      this.boredom+=2
      document.querySelector('#hunger').innerHTML = this.hunger
      document.querySelector('#sleepiness').innerHTML = this.sleepiness
      document.querySelector('#boredom').innerHTML = this.boredom
      if (this.hunger >= 15) {
        clearInterval(metricsUp)
       }
      if (this.sleepiness >= 15) {
        clearInterval(metricsUp)
      }
      if (this.boredom >= 15) {
        clearInterval(metricsUp)
      }
    }, 2000)
   }
  movePoke() {
    let picMove = document.getElementById('pic')
    picMove.height = 60
    picMove.width = 60
    const pokeMove = setInterval(()=> {
    picMove.style.top = Math.floor((Math.random() * 100) + 1)+'px'
    picMove.style.left = Math.floor((Math.random() * 100) + 1)+'px'
    if (this.hunger >= 15) {
      clearInterval(pokeMove)
    }
    if (this.sleepiness >= 15) {
      clearInterval(pokeMove)
    }
    if (this.boredom >= 15) {
      clearInterval(pokeMove)
      }
    }, 300)
  }
}

let buttonSubmit = document.querySelector('#submit')
buttonSubmit.addEventListener('click', (event)=> {
  event.preventDefault()
  let pokeName = document.getElementById('input').value
  document.querySelector('h2').innerHTML = pokeName
})


const newTama = new Tamagotchi()


  let startGame = document.querySelector('#start')
  startGame.addEventListener('click', (event)=> {
    newTama.gameTime()
    newTama.levelUp()
    newTama.feedPet()
    newTama.play()
    newTama.goodNight()
    newTama.movePoke()
  })





// newTama.gameTime()
// newTama.levelUp()
// newTama.feedPet()
// newTama.play()
// newTama.goodNight()
// newTama.evolve()

console.log(newTama)
