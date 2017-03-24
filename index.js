const chalk = require('chalk');
const {Poney} = require('./poney');
const {DayOrNight, cycleEvents} = require('./day-or-night');

console.log(chalk.bold('Let the life start !'));

const day = new DayOrNight();

day.launchDayOrNight();

const poneyList = [];

for (let i = 0; i < 10; i++) {
  poneyList.push(new Poney(cycleEvents));
}
