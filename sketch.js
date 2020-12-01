
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,paperObject,groundObject;	
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,550,width,30);
	d1 = new dustbin(1100,530);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("cyan");
 
  
  paperObject.display();
  groundObject.display();
  d1.display(); 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  	}
}