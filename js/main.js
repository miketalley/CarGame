var car;
var width = 1550;
var height = 700;
var MAX_SPEED = 100;

$(document).ready(function(){
	$(".main").append("<canvas id='canvas' height='" + height + "' width='" + width + "'></canvas>");
	$(document).on('keydown', handleKeyDown);
	car = new Player(1);
	runGame();
});

var sprites = [];

function getContext(){
	return $("#canvas")[0].getContext('2d');
};

function runGame(){
	window.setInterval(function(){
		getContext().clearRect(0, 0, width, height);
		getContext().font = "30px Arial";
		getContext().strokeText("Speed: ".concat(car.speed),10,50);
		for(i in sprites){
			getContext().drawImage(sprites[i].image, sprites[i].xPos, sprites[i].yPos, 100, 120);
		}
	}, 0);
};

function Player(number){
	this.xPos = 700;
	this.yPos = 580;
	this.speed = 0;
	this.image = new Image();

	this.image.src = 'content/car.jpg';

	sprites.push(this);
	
	this.speedUp = function(){
		if(this.speed < MAX_SPEED){
			this.speed += 5;
		}
	};
	this.brake = function(){
		if(this.speed > 0){
			this.speed -= 5;
		}
	};
	this.moveLeft = function(){
		if(this.xPos > 0){
			this.xPos -= 20;
		}
	};
	this.moveRight = function(){
		if(this.xPos < 1450){
			this.xPos += 20;
		}
	};
}

 function handleKeyDown(e){
	var key = e.keyCode
	if(key === 87 || key === 38){
		// Up
		car.speedUp();
	}
	else if(key === 83 || key === 40 ){
		// Down
		car.brake();
	}
	else if(key === 65 || key === 37 ){
		// Left
		car.moveLeft();
	}
	else if(key === 68 || key === 39 ){
		// Right
		car.moveRight();
	}
};



