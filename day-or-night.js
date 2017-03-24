/**
 * Created by ab on 3/21/17.
 */

const {EventEmitter} = require('events');

const cycleEvents = new EventEmitter();

let instance = null;
class DayOrNight {

  constructor() {
    if (!instance) {
      instance = this;
      this.isDay = true;
      this.interGereCycle = setInterval(() => {
        this.launchDayOrNight();
      }, 10000);
    }
    return instance;
  }

  launchDayOrNight() {
    this.isDay = !this.isDay;
    if (this.isDay) {
      // this.eventDayOrNight.emit('Day');
      cycleEvents.emit('cycle change', 'day');
    } else {
      // this.eventDayOrNight.emit('Night');
      cycleEvents.emit('cycle change', 'night');
    }
  }
}

module.exports = {DayOrNight, cycleEvents};
