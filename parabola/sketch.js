

var palla;
var pathX = [];
var pathY =[];
var angle;
var process = false;


function setup(){
    createCanvas(3000, 1000);
    palla = new Palla();
}


function draw(){
    background('#9fd2cd');


    strokeWeight(4);
    stroke(255, 0, 0);

    for (var i = 0; i < pathX.length; i++){
        var x = pathX[i];
        var y = pathY[i];
        point(x, y);
    }


    palla.show();
    if (this.process && palla.y < height){

        palla.update();
    
}
}


class Palla {

    constructor(){
        this.x = parseInt($('#input_initx').val());
        this.y = parseInt($('#input_inity').val());
        this.angle = parseInt($('#input_angle').val());

        this.virginX = this.x;
        this.virginY = this.y;

        this.v0 = parseInt($('#input_v0').val());
        this.a = parseInt($('#input_a').val());
        this.t = 0;

    }

    show(){
        fill('#fd6c9e');
        noStroke();
        ellipse(this.x, this.y, 50, 50);
        pathX.push(this.x);
        pathY.push(this.y);
    }

    update(){
        /**
         * v0x = v0*cos(alpha);
         * v0y = v0*sin(alpha);
         * 
         * t 0 
         * 
         * x = x0 + v0x*t
         * y = -1/2gt^2+v0y*t+y0
         * 
         */
        


        this.v0x = this.v0*cos(this.angle);
        this.v0y = this.v0*sin(this.angle);

        this.x = this.virginX + (this.v0x*this.t);
        this.y = 1/2 * this.a * this.t * this.t - (this.v0y*this.t) + this.virginY;

        this.t += 0.2;

    }

}


function reset(){
    this.angle = parseInt($('#input_angle').val());
    this.process = false;
    this.palla = new Palla();
    this.pathX = [];
    this.pathY = [];

    console.log("Reset:")
    console.log("angle="+this.angle);
    console.log("x0="+this.palla.virginX);
    console.log("y0="+this.palla.virginY);
    console.log("v0="+this.palla.v0);
    console.log("a="+this.palla.a)

}

function invert(){
    this.process = !this.process;
}
