// eslint-disable-next-line no-restricted-modules
require('colors');
const {Poney} = require('./poney');

let instance = null;

class Deadpool {

  constructor(ev) {
    if (!instance) {
      instance = this;
      this.levelEnergy = 0;
      this.helpGranted = 1;
      this.teamPoney = [];
      this.nbPoney = 0;
      this.nbUnicorn = 0;

      ev.on('cycle change', period => {
        if (period === 'day') {
          this.helpGranted = 2;
        } else if (period === 'night') {
          this.helpGranted = 1;
        }
      });

      setInterval(() => {
        this.nbPoney = this.teamPoney.length;
        if (this.nbPoney >= 1) {
          this.feedingOnUnicorn(Math.floor(Math.random() * this.nbPoney));
        }
      }, 1500);

      setInterval(() => {
        if (this.levelEnergy >= 15) {
          console.log(
            'Deadpool is fighting to save the world (or to have some fun)'.america);
          this.levelEnergy -= 15;
        }
      }, 1000 * this.helpGranted);

    }
    return instance;
  }

  nbUnicornCount() {
    return new Promise((resolve) => {
      this.a = 0;
      this.nbPoney = this.teamPoney.length;
      for (let i = 0; i < this.nbPoney; i++) {
        if (this.teamPoney[i].isUnicorn) {
          this.a++;
        }
      }
      this.nbUnicorn = this.a;
      resolve();
    })
  }

  transformToUnicorn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.nbUnicornCount()
          .then(() => this.transformToUnicorn2())
          .then(() => resolve())
          .catch(() => reject());
      });
    }, 500);
  }

  transformToUnicorn2() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.1 * this.nbUnicorn) {
        resolve();
      } else {
        reject();
      }
    });
  }

  feedingOnUnicorn(i) {
    setInterval(() => {
      if (this.teamPoney[i].isUnicorn) {
        this.teamPoney[i].feedingDeadpool()
          .then(() => this.levelEnergy += 5)
          .then(() => console.log('Deadpool is feeding'.red))
          .catch(() => console.log('Deadpool coud not feed'.red));
      }
    }, 500 * this.helpGranted);
  }

}

module.exports = {Deadpool};
