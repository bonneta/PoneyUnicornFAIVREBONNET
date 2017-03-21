/**
 * Created by ab on 3/17/17.
 */

class Deadpool {

  constructor() {
    this.levelEnergy = 0;
    this.spiderMan = new SpiderMan();
    this.teamPoney = [];
    this.nbUnicorn = this.teamPoney.length;
  }

  transformToUnicorn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random()*this.nbUnicorn > 0.5) {
          resolve();
        } else {
          reject();
        }
      });
    }, 1000);
  }

  feedingOnUnicorn(i) {
    setInterval(() => {
      if (this.teamPoney[i].isUnicorn) {
        this.teamPoney[i].feedingDeadpool()
          .then(() => this.levelEnergy += 5)
          .catch(() => console.log('Failed'))
      }
    }, 1000);
  }

}

module.exports = {Deadpool};