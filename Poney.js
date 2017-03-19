/**
 * Created by ab on 3/17/17.
 */

class Poney {


  constructor() {
    this.tickEnergy = 1;
    this.levelEnergy = 0;
    this.isUnicorn = false;
    this.deadpool = new Deadpool();
    this.spiderMan = new SpiderMan ();
    this.deadpool.teamPoney.push(this);

    setInterval(() => {
      this.levelEnergy += tickEnergy;
      if (this.levelEnergy >= 100) {
        this.deadpool.transformToUnicorn(this)
          .then(() => this.turnToUnicorn())
          .catch(() => console.log('Failed'))
      }
    }, 1000);
  }

  turnToUnicorn() {
      setTimeout(() => {
       if (Math.random()*this.levelEnergy >=0.5){
         this.isUnicorn = true;
       }
       this.levelEnergy = 0;
    }, 1000);
  }

  feedingDeadpool() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn) {
          this.levelEnergy = 0;
          this.isUnicorn = false;
          resolve();
        } else {
          reject();
        }
      });
    }, 1000);
  }

}

module.exports = {Poney};