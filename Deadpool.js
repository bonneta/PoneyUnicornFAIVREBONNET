/**
 * Created by ab on 3/17/17.
 */
const {Poney}= require('./Poney');
const {SpiderMan} = require('./SpiderMan');
const {DayOrNight} = require('./DayOrNight');
const {colors} = require('colors');

let instance  = null;

class Deadpool {

  constructor() {
    if (!instance) {
      instance = this;
      this.levelEnergy = 0;
      this.helpGranted = 1;
      this.teamPoney = [];
      this.nbPoney = 0;
      this.nbUnicorn = 0;
      this.dayOrNight = new DayOrNight();

      this.dayOrNight.eventDayOrNight.on('Day',function(){
        this.helpGranted = 2;
      });

      this.dayOrNight.eventDayOrNight.on('Night',function(){
        this.helpGranted = 1;
      });

      setInterval(() => {
        this.nbPoney = this.teamPoney.length;
        if (this.nbPoney >= 1) {
          this.feedingOnUnicorn(Math.floor(Math.random() * this.nbPoney));
        }
      }, 1500);

      setInterval(() => {
        if (this.levelEnergy>=15) {
          console.log('Deadpool is fighting to save the world (or to have some fun)'.america);
          this.levelEnergy -= 15;
        }
      }, 1000*this.helpGranted);

    }
    return instance;
  }

  nbUnicornCount (){
    return new Promise((resolve, reject) => {
      this.a = 0;
      this.nbPoney = this.teamPoney.length;
      for (let i = 0; i < this.nbPoney; i++) {
        if (this.teamPoney[i].isUnicorn) {
          this.a++;
        }
      }
      this.nbUnicorn = this.a;
      resolve();
    })
  };

  transformToUnicorn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.nbUnicornCount()
          .then(() => this.transformToUnicorn2() )
          .then (() => resolve() )
          .catch(() => reject() )
      });
    }, 500);
  }

  transformToUnicorn2() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.1*this.nbUnicorn ) {
          resolve();
        } else {
          reject();
        }
      });
  }

  feedingOnUnicorn(i) {
    setInterval(() => {
      if (this.teamPoney[i].isUnicorn) {
        this.teamPoney[i].feedingDeadpool()
          .then(() => this.levelEnergy += 5)
          .then(() => console.log('Deadpool is feeding'.red))
          .catch(() => console.log('Deadpool coud not feed'.red))
      }
    }, 500*this.helpGranted);
  }

}

module.exports = {Deadpool};