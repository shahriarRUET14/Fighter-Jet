function Bullet() {
  (this.ctx = canvas.getCanvasCtx("canvasJet")),
    (this.options = {
      srcX: 142.5,
      srcY: 557.5,
      width: 5, //Jet Bullet canvas position
      height: 5, //Jet Bullet canvas position
      drawX: -200,
      drawY: 200,
      drawWidth: 11,
      drawHeight: 4,

      explosion: new Explosion(),
    });
  this.speed = 6;
  this.visible = true;
}

Bullet.prototype.drawBulletCanvas = function () {
  this.options.drawX += this.speed;
  canvas.draw(this.ctx, this.options);
  this.checkHitEnemy();
  this.recycleBullet();
};

Bullet.prototype.recycleBullet = function () {
  if (this.options.drawX > window.innerWidth || this.options.explosion.hasHit)
    this.options.drawX = -20;
};

Bullet.prototype.fire = function (drawX, drawY) {
  this.options.drawX = drawX;
  this.options.drawY = drawY;
  // fireSound.play();
  document.getElementById("fire").cloneNode(true).play();
};

Bullet.prototype.checkHitEnemy = function () {
  for (var i = 0; i < canvas.enemies.length; i++) {
    if (
      this.options.drawX > canvas.enemies[i].enemyOptions.drawX &&
      this.options.drawX < canvas.enemies[i].enemyOptions.drawX + 100 &&
      this.options.drawY > canvas.enemies[i].enemyOptions.drawY + 10 &&
      this.options.drawY < canvas.enemies[i].enemyOptions.drawY + 30
    ) {
      document.getElementById("enemyKill").cloneNode(true).play();
      // debugger;
      fighterJet.score.updateScoreForKill();
      this.options.explosion.options.drawX =
        canvas.enemies[i].enemyOptions.drawX +
        this.options.explosion.options.width / 2;
      this.options.explosion.options.drawY =
        canvas.enemies[i].enemyOptions.drawY -
        this.options.explosion.options.height / 3;
      this.options.explosion.hasHit = true;
      this.recycleBullet();
      canvas.enemies[i].recycleEnemy();
    }
  }
};

Bullet.prototype.removeBullet = function () {
  this.options.drawX = -20;
};
