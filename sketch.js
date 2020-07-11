const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// Global variables
var engine, world;
var rope1, rope2, rope3, rope4, rope5;
var ground;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5; 

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
	world = engine.world;
	
	// Objects for the correspoding classes
	ground = new Ground(600,400,250,20)
	bobObject1 = new Bob(500, 600, 50);
    bobObject2 = new Bob(550, 600, 50);
    bobObject3 = new Bob(600, 600, 50);
    bobObject4 = new Bob(650, 600, 50);
	bobObject5 = new Bob(700, 600, 50);
	rope1 = new Rope(bobObject1.body, ground.body, -100, 10);
	rope2 = new Rope(bobObject2.body, ground.body, -50, 10);
	rope3 = new Rope(bobObject3.body, ground.body, 0, 10);
	rope4 = new Rope(bobObject4.body, ground.body,  50, 10);
	rope5 = new Rope(bobObject5.body, ground.body, 100, 10);

	
	Engine.run(engine);
}

function draw(){
    background(255);
	Engine.update(engine);
	
	// Display all the objects
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	ground.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	
	keypressed();

}

// Lift up the ball when up arrow is pressed
function keypressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bobObject1.body, bobObject1.body.position, {x:85 ,y:-85});
		
	}
}


