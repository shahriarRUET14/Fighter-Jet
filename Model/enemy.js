function Enemy() {
  this.ctx = canvas.getCanvasCtx("canvasEnemy");
  this.enemyOptions = {
    srcY: 540,
    drawX: Math.floor(Math.random() * 1000) + window.innerWidth,
    drawY: Math.floor(Math.random() * 360),
    width: 100,
    height: 30,
  };
  this.movement = false;
  this.rewardPoints = 5;
  this.goUp = true;
  this.speed = 2;
  this.canShoot = false;
  this.warOptions = [];

  // this.EnemyWarOptions = {
  //   bullets: [],
  //   currentBullet: 0,
  //   fireBtn: true,
  //   isShooting: true,
  // };
  // for (var j = 0; j <= getRandomNumber(500, 9999); j++) {
  //   this.EnemyWarOptions.bullets[this.EnemyWarOptions.bullets.length] =
  //     new enemyBullet();
  // }

  // function getRandomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
}
Enemy.prototype.verticalMovement = 0.5;

Enemy.prototype.drawEnemyCanvas = function () {
  // this.enemyOptions.drawX -= this.speed; //negetive x axis(enemy movement)
  this.enemyOptions.drawX -= this.speed;
  // this.EnemydrawAllBullets();

  // this.checkShooting();
  // this.checkHitJet();
  if (this.movement) {
    if (this.goUp) {
      this.enemyOptions.drawY -= this.verticalMovement;
    } else {
      this.enemyOptions.drawY += this.verticalMovement;
    }
    if (this.enemyOptions.drawY === 0) {
      this.goUp = false;
    } else if (this.enemyOptions.drawY === 500) {
      this.goUp = true;
    }
  }
  canvas.draw(this.ctx, this.enemyOptions);
  this.escaped();
};
// Enemy.prototype.checkShooting = function () {
//   if (this.EnemyWarOptions.fireBtn && this.EnemyWarOptions.isShooting) {
//     this.EnemyWarOptions.bullets[this.EnemyWarOptions.currentBullet++]?.fire(
//       this.enemyOptions.drawX + 100, // draw fire drawX=200+100
//       this.enemyOptions.drawY + 30 // draw fire drawY=300+30
//     );
//   } else if (!this.EnemyWarOptions.fireBtn) {
//     this.EnemyWarOptions.isShooting = true;
//   }
// };
// Enemy.prototype.EnemydrawAllBullets = function () {
//   console.log(this.EnemyWarOptions?.bullets);
//   for (var i = 0; i < this.EnemyWarOptions.bullets.length; i++) {
//     console.log(this.EnemyWarOptions.bullets[i]);
//     if (this.EnemyWarOptions.bullets[i].enemyBulletoptions.drawX >= 0)
//       this.EnemyWarOptions.bullets[i].drawBulletCanvas();

//     if (this.EnemyWarOptions.bullets[i].enemyBulletoptions.explosion.hasHit)
//       this.EnemyWarOptions.bullets[
//         i
//       ].enemyBulletoptions.explosion.drawExplosionCanvas();
//   }
// };

Enemy.prototype.escaped = function () {
  if (this.enemyOptions.drawX <= 0) {
    this.recycleEnemy();
  }
};

Enemy.prototype.recycleEnemy = function () {
  // console.log("enemy drawn");
  // console.log("Speed: " + this.speed);
  this.enemyOptions.drawX =
    Math.floor(Math.random() * 1000) + window.innerWidth;
  this.drawY = Math.floor(Math.random() * 360);
  canvas.currentTotalEnemies++;
  // console.log("Current level total: " + canvas.currentTotalEnemies);
  // console.log("Number of enemies: " + level.getCurrentLevel().numberOfEnemies);
  // canvas.currentSpawnAmount--;
  // if(canvas.currentSpawnAmount === 0){

  // }
  if (
    canvas.currentTotalEnemies >
    level.getCurrentLevel().numberOfEnemies * 2
  ) {
    canvas.updateLevel();
  }
};

Enemy.prototype.checkShooting = Jet.prototype.checkShooting;
Enemy.prototype.drawAllBullets = Jet.prototype.drawAllBullets;
