const chalk = require('chalk');
const {Deadpool} = require('./deadpool');
const {SpiderMan} = require('./spiderman');

class Poney {
  constructor(ev) {
    this.tickEnergy = 10;
    this.levelEnergy = 0;
    this.isUnicorn = false;
    this.deadpool = new Deadpool(ev);
    this.spiderMan = new SpiderMan();
    this.deadpool.teamPoney.push(this);
    this.spiderMan.teamPoney.push(this);

    ev.on('cycle change', period => {
      if (period === 'day') {
        this.tickEnergy = 10;
      } else if (period === 'night') {
        this.tickEnergy = 20;
      }
    });

    setInterval(() => {
      this.levelEnergy += this.tickEnergy;
      if (this.levelEnergy >= 100 && !this.isUnicorn) {
        this.deadpool.transformToUnicorn()
          .then(() => this.turnToUnicorn())
          .catch(() => {
            console.log(chalk.yellow('Deadpool did not want to ' +
              'turn your poney to a unicorn'));
          });
      }
    }, 500);
  }

  turnToUnicorn() {
    setTimeout(() => {
      if (Math.random() * this.levelEnergy >= 50) {
        this.isUnicorn = true;
        console.log(
          chalk.magenta('One of your poney just turned to a unicorn'));
      }
      this.levelEnergy = 0;
    }, 500);
  }

  turnToPoney() {
    setTimeout(() => {
      this.isUnicorn = false;
      console.log(chalk.cyan('One of your unicorn just turned to a poney'));
      this.levelEnergy = 0;
    }, 500);
  }

  feedingDeadpool() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn) {
          this.turnToPoney();
          resolve();
        } else {
          reject();
        }
      });
    }, 500);
  }

  beingRide() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.isUnicorn) {
          this.turnToPoney();
          resolve();
        } else if (this.levelEnergy >= 40) {
          this.levelEnergy = 30;
          resolve();
        } else {
          reject();
        }
      });
    }, 500);
  }

}

module.exports = {Poney};
