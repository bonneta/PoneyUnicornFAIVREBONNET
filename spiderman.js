// eslint-disable-next-line no-restricted-modules
require('colors');
const {Poney} = require('./poney');

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
      .then(() => console.log('SpiderMan is happy because '+
        'he just had some fun with a poney/unicorn'.cyan))
      .catch(() => console.log(
        'SpiderMan is sad because the poney/unicorn turned him down'.blue))
  }
}

module.exports = {SpiderMan};
