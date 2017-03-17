/**
 * Created by ab on 3/17/17.
 */

class Deadpool{

    constructor(){
        this.levelEnergy = 0;
        this.nbUnicorn = 0;
        this.teamPoney = [];

    }

  transformToUnicorn () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject();
        }
      });
    }, 1000);
  }

}

module.exports = {Deadpool};