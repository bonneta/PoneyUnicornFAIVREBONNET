/**
 * Created by ab on 3/17/17.
 */
const {Poney}= require('./Poney');
const {Deadpool}= require('./Deadpool');
const {DayOrNight} = require('./DayOrNight');
const {colors} = require('colors');

let instance  = null;

class SpiderMan {

  constructor() {
    if (!instance) {
      instance = this;
      this.teamPoney = [];

      setInterval(() => {
        this.ridingUnicornOrPoney ();
      }, 5000);

    }
  return instance;
  }

  ridingUnicornOrPoney () {
    let i = Math.floor(Math.random() * this.teamPoney.length);
    this.teamPoney[i].beingRide()
      .then(() => console.log('SpiderMan is happy because he just had some fun with a poney/unicorn'.cyan))
      .catch(() => console.log('SpiderMan is sad because the poney/unicorn turned him down'.blue))
    }

}

module.exports = {SpiderMan};