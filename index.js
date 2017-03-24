/**
 * Created by ab on 3/17/17.
 */

const {Poney}= require('./poney');
const {Deadpool}= require('./Deadpool');
const {SpiderMan} = require('./SpiderMan');
const {DayOrNight, cycleEvents} = require('./day-or-night');
const {colors} = require('colors');
//var colors = require('colors');


console.log('Let the life start !'.bold);

let dayOrNight = new DayOrNight();
let deadpool = new Deadpool();
let spiderMan = new SpiderMan();
let fluttershy = new Poney(cycleEvents);
let twilightSparkles = new Poney(cycleEvents);
let pinkiePie = new Poney(cycleEvents);
let appleJack = new Poney(cycleEvents);
let ponyPony = new Poney(cycleEvents);
let ponyta = new Poney(cycleEvents);
let poissonRouge = new Poney(cycleEvents);

