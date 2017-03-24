// eslint-disable-next-line no-restricted-modules import/no-unassigned-import
require('colors');
const {Poney} = require('./poney');
const {DayOrNight, cycleEvents} = require('./day-or-night');

console.log('Let the life start !'.bold);

const day = new DayOrNight();

day.launchDayOrNight();

const poneyList = [];

for (let i = 0; i < 10; i++) {
  poneyList.push(new Poney(cycleEvents));
}
