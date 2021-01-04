
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var dustbinImage;
var paper,paperImage;

// function preload(){
//   paperImage=loadImage("sprites/paper(1).png")
// dustbinImage=loadImage("sprites/dustbingreen.png")
// }

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

   paper=new Paper(100,300,10);
   dustbin=new Box(720,390,100,10);

   //Create a Ground
	 ground = Bodies.rectangle(width/2, 400, width, 10 , {isStatic:true} );
	 World.add(world, ground);
    
}

function draw() {

  background("black");
  rectMode(CENTER);
  background(0);
  
paper.display();
dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13});
		
	}
}


