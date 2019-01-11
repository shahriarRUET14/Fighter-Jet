var shootInterval = 0;

function Jet () {
	this.ctx = canvas.getCanvasCtx('canvasJet'),

	this.options = {
		srcY: 500,
		drawX: 200,
		drawY: 300,
		width: 100,
		height: 30,
		explosion: new Explosion()
	};

	this.stear = {
		up : false,
		forward : false,
		down : false,
		backword : false
	};

	this.jetWarOptions = {
		bullets : [],
		currentBullet : 0,
		fireBtn : false,
		isShooting : false
	}

	for( var i = 0; i <= 70; i++ ){
		this.jetWarOptions.bullets[ this.jetWarOptions.bullets.length ] = new Bullet();
	}

  this.score = new Score();
  this.score.update();
  this.speed = 2;
  this.life = 3;
  this.totalLife = 3;
}

// Jet.prototype.drawJetCanvas = function() {
// 	canvas.clear( this.ctx );
// 	this.jetDirection();
// 	this.checkShooting();
//   this.drawAllBullets();
//   this.showLife();
// 	canvas.draw( this.ctx, this.options );			
// };

Jet.prototype.showLife = function () {
	
	
    for (var lifeNumber = 1; lifeNumber <= this.totalLife; lifeNumber++) {
      var id = "life" + lifeNumber;
	//   console.log(id);
	if(lifeNumber > this.life){
		$('#'+id).attr('src', 'images/lifeGone.png');
	}
	else{
		$('#'+id).attr('src', 'images/jet.png');
	}
	  
	}
	
  }
Jet.prototype.checkShooting = function(){
	if( this.jetWarOptions.fireBtn && shootInterval>5 ){
		this.jetWarOptions.isShooting = true;
		this.jetWarOptions.bullets[this.jetWarOptions.currentBullet++].fire(this.options.drawX + 100, this.options.drawY + 30);	
		if( this.jetWarOptions.currentBullet >= this.jetWarOptions.bullets.length ) {
			this.jetWarOptions.currentBullet = 0;	
		}
		shootInterval = 0;
	}else if( !this.jetWarOptions.fireBtn ){
		this.jetWarOptions.isShooting = false;
	}
};

Jet.prototype.drawAllBullets = function(){
	for(var i = 0; i < this.jetWarOptions.bullets.length; i++){
		if( this.jetWarOptions.bullets[i].options.drawX >= 0 ) this.jetWarOptions.bullets[i].drawBulletCanvas();
		if( this.jetWarOptions.bullets[i].options.explosion.hasHit) this.jetWarOptions.bullets[i].options.explosion.drawExplosionCanvas();
	}
}

Jet.prototype.jetDirection = function() {
	if(this.stear.up) this.options.drawY -= this.speed;
	if(this.stear.forward) this.options.drawX += this.speed;
	if(this.stear.down) this.options.drawY += this.speed;
	if(this.stear.backword) this.options.drawX -= this.speed; 
}

Jet.prototype.updateScore = function(points){
	this.score += points; 
	canvas.gameScore.update();
}
