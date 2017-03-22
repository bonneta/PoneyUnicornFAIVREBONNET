/**
 * Created by ab on 3/21/17.
 */

const EventDayOrNight = require('events');

let instance = null;
class DayOrNight {

  constructor() {
    if (!instance) {
      instance = this;
      this.isDay = true;
      this.eventDayOrNight = new EventDayOrNight();
      this.interGereCycle = setInterval(() => {
        this.launchDayOrNight();
      }, 10000);

    }
    return instance;
  }

  launchDayOrNight(){
    this.isDay = ! this.isDay;
    if(this.isDay){
      this.eventDayOrNight.emit('Day');
    }
    else{
      this.eventDayOrNight.emit('Night');
    }

  }
}


module.exports = {DayOrNight};
