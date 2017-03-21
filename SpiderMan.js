/**
 * Created by ab on 3/17/17.
 */
const {Poney}= require('./Poney');
const {Deadpool}= require('./Deadpool');
const {DayOrNight} = require('./DayOrNight');

const instance  = null;

class SpiderMan {

  constructor() {
    if (!instance) {
      //let instance = new SpiderMan();
      this.nb = Math.random();

    }
  return instance;
  }
}

module.exports = {SpiderMan};