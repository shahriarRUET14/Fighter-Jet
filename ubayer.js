const FRAME_WIDTH = 1500;
const FRAME_HEIGHT = 450;



Jet.prototype.drawJetCanvas = function () {
	canvas.clear(this.ctx);
	this.jetDirection();
	this.checkShooting();
	this.drawAllBullets();
	this.checkHitEnemy();
	this.checkHitWall();
	this.showLife();
	canvas.draw(this.ctx, this.options);
};

function detectCollision(jet, enemy) {
	let bottomOfJet = jet.options.drawY + jet.options.height;
	let topOfJet = jet.options.drawY;
	let leftOfJet = jet.options.drawX;
	let rightOfJet = jet.options.drawX + jet.options.width;

	let topOfEnemy = enemy.enemyOptions.drawY;
	let leftSideOfEnemy = enemy.enemyOptions.drawX;
	let rightSideOfEnemy = enemy.enemyOptions.drawX + enemy.enemyOptions.width;
	let bottomOfEnemy = enemy.enemyOptions.drawY + enemy.enemyOptions.height;
	
	if (
		   rightOfJet >= leftSideOfEnemy
		&& rightOfJet <= rightOfJet
		&& leftOfJet <= rightSideOfEnemy
		&& bottomOfJet >= topOfEnemy
		&& topOfJet <= bottomOfEnemy
		) {
		
		return true;
	} else {
		return false;
	}
}

Jet.prototype.checkHitWall = function(){
	console.log("X: " + this.options.drawX);
	if(this.options.drawX+this.options.width >= FRAME_WIDTH)this.options.drawX=FRAME_WIDTH - this.options.width;
	if(this.options.drawX <= 100)this.options.drawX = 100;
	if(this.options.drawY <= 0)this.options.drawY = 0;
	if(this.options.drawY + this.options.height >= FRAME_HEIGHT)this.options.drawY = FRAME_HEIGHT - this.options.height;
}


Jet.prototype.checkHitEnemy = function () {
	for (var i = 0; i < canvas.enemies.length; i++) {
		if (detectCollision(this, canvas.enemies[i])) {
			
			// debugger;
			this.life--;
			this.showLife();
			// debugger;
			if (this.life <= 0) {
				$("#resume").text('Your Score: ' + fighterJet.score.score).attr('disabled', 'disabled');
				pauseGame();
			}
			this.options.explosion.options.drawX = canvas.enemies[i].enemyOptions.drawX + (this.options.explosion.options.width / 2);
			this.options.explosion.options.drawY = canvas.enemies[i].enemyOptions.drawY - (this.options.explosion.options.height / 3);
			this.options.explosion.hasHit = true;
			this.options.explosion.drawExplosionCanvas();
			// $('#collideEnemy').play();
			//this.recycleBullet();
			canvas.enemies[i].recycleEnemy();
		}
	};
}
