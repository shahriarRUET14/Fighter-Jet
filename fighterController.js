var imageSprite = new Image();

imageSprite.src = 'images/sprite.png';
imageSprite.addEventListener('load', canvas.init.bind(canvas), false);
//var level = new Level();
// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//         this.sound.play();
//     }
//     this.stop = function(){
//         this.sound.pause();
//     }    
// }

// var fireSound = new sound("sound/gun.mp3");
var fighterJet = new Jet();
