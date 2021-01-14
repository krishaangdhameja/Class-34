class Ball {
  constructor(x,y,radius) {
    var options = {
        frictionAir : 0.005,
        density : 1,
       
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.x = x;
    this.y = y;
    this.radius = radius;

  }
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
}