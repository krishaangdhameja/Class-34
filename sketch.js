const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var building1,building2,building3,building4,building5,building6;
var ball;

function preload() {


}

function setup() {
createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

ball = new Ball(200,400,80);
building1 = new Building(500,200,50,50);
building2 = new Building(500,250,50,50);
building3 = new Building(500,300,50,50);
building4 = new Building(500,350,50,50);
building5 = new Building(500,400,50,50);
building6 = new Building(500,450,50,50);
ground = new Ground(600,580,1200,20);
rope = new Rope(ball.body,{x:200,y:100})

}

function draw() {
background("grey");

ball.display();
building1.display();
ground.display();
rope.display();
building2.display();
building3.display();
building4.display();
building5.display();
building6.display();

}
function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }