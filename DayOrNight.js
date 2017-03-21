/**
 * Created by ab on 3/21/17.
 */

const EventDayOrNight = require('events');

class DayOrNight {


  constructor() {

    this.isDay = true;
    this.eventDayOrNight = new EventDayOrNight();
    this.InterGereCycle = setInterval(() => {
      launchDayOrNight();
    }, 10000);


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
