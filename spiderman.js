const chalk = require('chalk');

let instance = null;

class SpiderMan {
  constructor() {
    if (!instance) {
      instance = this;
      this.teamPoney = [];

      setInterval(() => {
        this.ridingUnicornOrPoney();
      }, 5000);
    }
    return instance;
  }

  ridingUnicornOrPoney() {
    const i = Math.floor(Math.random() * this.teamPoney.length);
    this.teamPoney[i].beingRide()
      .then(() => console.log(chalk.cyan.bold('SpiderMan is happy because ' +
        'he just had some fun with a poney/unicorn')))
      .catch(() => console.log(chalk.blue.bold(
        'SpiderMan is sad because the poney/unicorn turned him down')));
  }
}

module.exports = {SpiderMan};
