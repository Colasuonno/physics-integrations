
// v = s/t;
// s = 1/2gt^2+t*Vo+So
// v = t*a+Vo

var o;
const ellipseSize = 60;

function setup(){
	createCanvas(600,600);
	o = new obj(10,1,0.04);
}


function draw(){
	background('#4876FF');
	o.show();
	o.push();
}

function obj(s,t,a) {

	this.x = ellipseSize/2+2;
	this.y = height/2;
	this.currenT = 0;
	this.currentS = 0;
	this.maxT = t;
	this.maxS = s;
	// constant a
	this.v = 0;
	this.a = a;

	this.show = function(){
		fill('#FF6347');
		strokeWeight(2);
		ellipse(this.x,this.y, ellipseSize,ellipseSize);
	}

	this.push = function(){
		if (this.x+(ellipseSize/2)+4 >= width-2) return;
			this.v += this.maxT*a;
			console.log(this.v + "px/ms");
			this.x += this.v;
}


}
