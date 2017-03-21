/**
 * Created by ab on 3/17/17.
 */
const {Poney}= require('./Poney');
const {SpiderMan} = require('./SpiderMan');
const {DayOrNight} = require('./DayOrNight');

class Deadpool {

  constructor() {
    this.levelEnergy = 0;
    this.spiderMan = new SpiderMan();
    this.teamPoney = [];
    this.nbUnicorn = this.teamPoney.length;

    setInterval(() => {
      this.nbUnicorn = this.teamPoney.length;
      if (this.nbUnicorn >= 1) {
        this.feedingOnUnicorn(Math.floor(Math.random() * this.nbUnicorn));
      }
    }, 1500);

  }

  transformToUnicorn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.nbUnicorn = this.teamPoney.length;
        if (Math.random()*this.nbUnicorn > 0.5) {
          resolve();
        } else {
          reject();
        }
      });
    }, 500);
  }

  feedingOnUnicorn(i) {
    setInterval(() => {
      if (this.teamPoney[i].isUnicorn) {
        this.teamPoney[i].feedingDeadpool()
          .then(() => this.levelEnergy += 5)
          .catch(() => console.log('Failed feeding'))
      }
    }, 500);
  }

}

module.exports = {Deadpool};