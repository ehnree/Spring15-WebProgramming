// game.js
// Written by: Henry Zhou
// Date: 3/3/2015

var img = new Image();
img.src = 'pacman10-hp-sprite.png';
img.addEventListener("load", 
					function() {
						var canvas = document.getElementById("game_canvas");
						var ctx = canvas.getContext('2d');
						ctx.drawImage(img, 320, 1, 465, 137, 0, 0, 465, 137);
						ctx.drawImage(img, 82, 20, 18, 17, 35, 28, 20, 18);
					}, 
					false);
