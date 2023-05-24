var Level = function () {
  this.currentLevel = 0;
  this.levelDetails = {
    level1: {
      level: 1,
      numberOfEnemies: 6,
      speed: 2,
      spawn: 4,
      levelScoreFactor: 1,
    },
    level2: {
      level: 2,
      numberOfEnemies: 10,
      speed: 4,
      spawn: 7,
      levelScoreFactor: 2,
    },
    level3: {
      level: 3,
      numberOfEnemies: 16,
      speed: 6,
      spawn: 12,
      levelScoreFactor: 3,
    },
    level4: {
      level: 4,
      numberOfEnemies: 20,
      speed: 8,
      spawn: 12,
      levelScoreFactor: 4,
    },
    level5: {
      level: 5,
      numberOfEnemies: 25,
      speed: 10,
      spawn: 12,
      levelScoreFactor: 5,
    },
    level6: {
      level: 6,
      numberOfEnemies: 30,
      speed: 12,
      spawn: 12,
      levelScoreFactor: 6,
    },
  };
};

Level.prototype.getCurrentLevel = function () {
  if (this.currentLevel === 1) {
    return this.levelDetails.level1;
  } else if (this.currentLevel === 2) {
    return this.levelDetails.level2;
  } else if (this.currentLevel === 3) {
    return this.levelDetails.level3;
  } else if (this.currentLevel === 4) {
    return this.levelDetails.level4;
  } else if (this.currentLevel === 5) {
    return this.levelDetails.level5;
  } else {
    return this.levelDetails.level6;
  }
};
