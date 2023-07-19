class Runner {
  constructor(name, pace, heartRate ) {
    this.name = name
    this.pace = pace
    this.heartRate = heartRate
  }

  giveIntro(){
    return`My name is ${this.name}, and my pace is ${this.pace} at a heart rate of ${this.heartRate}`
  }
}

class MarathonRunner extends Runner {
  constructor(name, pace, heartRate, pr){
    super(name, pace, heartRate)
    this.pr = pr
  }

  giveNewIntro() {
    return `I am a marathon runner name ${this.name} and my PR is ${this.pr}`
  }
}

const marathonRunner1 = new MarathonRunner('Francis', '8:20', 132, '4hrs')

console.log(marathonRunner1.giveIntro())
console.log(marathonRunner1.giveNewIntro())