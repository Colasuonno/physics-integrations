
var palla;

function setup(){
    createCanvas(2000, 2000);
    palla = new Palla();
}


function draw(){
    background('#9fd2cd');
    palla.show();
    palla.update(40, 5);
}


class Palla {

    constructor(){
        this.x = 50;
        this.y = (height/2)-200;

        this.v0 = 5;
        this.a = 10;
        this.t = 0;

    }

    show(){
        fill('#fd6c9e');
        ellipse(this.x, this.y, 100, 100);
    }

    update(alpha){
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
        

        this.v0x = this.v0*cos(alpha);
        this.v0y = this.v0*sin(alpha);

        this.x -= this.v0x*this.t;
        this.y -= -1/2 * this.a * this.t * this.t + this.v0y;

        this.t += 0.003;

        console.log("V0X " + this.v0x);
        console.log("v0y " + this.v0y);
        console.log("v0 " + this.v0);
        console.log("t " + this.t);
        console.log("x " + this.x);
        console.log("y " + this.y);

    

    }

}