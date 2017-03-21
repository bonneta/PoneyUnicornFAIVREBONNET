/**
 * Created by ab on 3/17/17.
 */

const {Poney}= require('./Poney');
const {Deadpool}= require('./Deadpool');
const {SpiderMan} = require('./SpiderMan');
const {DayOrNight} = require('./DayOrNight');

let deadpool = new Deadpool ();
let spiderMan = new SpiderMan ();
let spiderMan1 = new SpiderMan ();
let fluttershy = new Poney (deadpool);
let twilightSparkles = new Poney (deadpool);



console.log (`${spiderMan.nb}`);
console.log (`${spiderMan1.nb}`);
