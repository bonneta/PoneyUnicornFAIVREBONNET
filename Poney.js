/**
 * Created by ab on 3/17/17.
 */
const {Deadpool}= require('./Deadpool');
const {SpiderMan} = require('./SpiderMan');
const {DayOrNight} = require('./DayOrNight');

class Poney {


  constructor(deadpool) {
    this.tickEnergy = 10;
    this.levelEnergy = 0;
    this.isUnicorn = false;
    this.deadpool = deadpool;
    this.spiderMan = new SpiderMan ();
    this.deadpool.teamPoney.push(this);

    setInterval(() => {
      this.levelEnergy += this.tickEnergy;
      if (this.levelEnergy >= 100 && !this.isUnicorn) {
        this.deadpool.transformToUnicorn()
          .then(() => this.turnToUnicorn())
          .catch(() => console.log('Failed'))
      }
    }, 500);
  }

  turnToUnicorn() {
      setTimeout(() => {
        console.log('Deadpool accepted');
       if (Math.random()*this.levelEnergy >=50){
         this.isUnicorn = true;
         console.log('You are a Unicorn !');
       }
       else {
         console.log('You are a not Unicorn !');
       }
       this.levelEnergy = 0;
    }, 500);
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
    }, 500);
  }

}

module.exports = {Poney};