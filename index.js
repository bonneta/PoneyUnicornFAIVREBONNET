// eslint-disable-next-line no-restricted-modules
require('colors');
const {Poney} = require('./poney');
const {Deadpool} = require('./deadpool');
const {SpiderMan} = require('./spiderman');
const {DayOrNight, cycleEvents} = require('./day-or-night');


console.log('Let the life start !'.bold);

// let deadpool = new Deadpool(cycleEvents);
// let spiderMan = new SpiderMan();
const poneyList = [];

for (let i = 0; i < 10; i++) {
  poneyList.push(new Poney(cycleEvents));
}

// let fluttershy = new Poney(cycleEvents);
// let twilightSparkles = new Poney(cycleEvents);
// let pinkiePie = new Poney(cycleEvents);
// let appleJack = new Poney(cycleEvents);
// let ponyPony = new Poney(cycleEvents);
// let ponyta = new Poney(cycleEvents);
// let poissonRouge = new Poney(cycleEvents);

