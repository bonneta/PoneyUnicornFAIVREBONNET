/**
 * Created by ab on 3/17/17.
 */
const {Deadpool}= require('./Deadpool');
const {SpiderMan} = require('./SpiderMan');
const {DayOrNight} = require('./DayOrNight');

class Poney {


  constructor() {
    this.tickEnergy = 10;
    this.levelEnergy = 0;
    this.isUnicorn = false;
    this.deadpool = new Deadpool();
    this.spiderMan = new SpiderMan();
    this.dayOrNight = new DayOrNight();
    this.deadpool.teamPoney.push(this);
    this.spiderMan.teamPoney.push(this);

    this.dayOrNight.eventDayOrNight.on('Day',function(){
      this.tickEnergy = 10;
    });

    this.dayOrNight.eventDayOrNight.on('Night',function(){
      this.tickEnergy = 20;
    });

    setInterval(() => {
      this.levelEnergy += this.tickEnergy;
      if (this.levelEnergy >= 100 && !this.isUnicorn) {
        this.deadpool.transformToUnicorn()
          .then(() => this.turnToUnicorn())
          .catch(() => console.log('Deadpool did not want to turn your poney to a unicorn'))
      }
    }, 500);
  }



  turnToUnicorn() {
      setTimeout(() => {
       if (Math.random()*this.levelEnergy >=50){
         this.isUnicorn = true;
         console.log('%c One of your poney just turned to a unicorn','color: blue');
       }
       this.levelEnergy = 0;
    }, 500);
  }

  turnToPoney() {
    setTimeout(() => {
      this.isUnicorn = false;
      console.log("One of your unicorn just turned to a poney");
      this.levelEnergy = 0;
    }, 500);
  }

  feedingDeadpool() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn) {
          this.turnToPoney();
          resolve();
        } else {
          reject();
        }
      });
    }, 500);
  }

  beingRide() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn){
          this.turnToPoney;
          resolve();
        }
        else {
          if (this.levelEnergy >=40){
            this.levelEnergy = 30;
            resolve();
          }
          else {
            reject();
          }
        }
      });
    },500);
  }

}

module.exports = {Poney};