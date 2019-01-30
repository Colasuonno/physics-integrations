
var rocket;

function setup(){

  createCanvas(600,600);
  rocket = new Rocket();
}


function draw(){
  background(51);

  translate(width/2,height/2);

  rocket.show();
  rocket.update();

}


function Rocket(){

  // translated (40,height-40);
  this.x = 0;
  this.y = 0;
  this.velocity = 5;
  this.gravity = 0.5;
  this.airResistence = 0.4;
  this.angle = -PI/2;

  this.show = function(){
    fill(200,30,40);
    ellipse(this.x,this.y,50);
  }

  this.update = function(){
  /*  this.x += (this.velocity - this.gravity)*this.airResistence;
    this.y += (this.velocity - this.gravity)*this.airResistence;*/

    if (this.angle == PI/2){
      console.log("stop");
    } else{

      var x = cos(this.angle)*100;
      var y = sin(this.angle)*100;

      this.x = x;
      this.y = y;

      this.angle -= 0.1;
}
  }

}
