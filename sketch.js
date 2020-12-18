var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var target1Sprite, target1body;
var target2Sprite, target2body;
var target3Sprite, target3body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	target1Sprite = createSprite(width/2, height-20, 200, 20);
	target1Sprite.shapeColor = "red";

	target2Sprite = createSprite(300, 600, 20, 100);
	target2Sprite.shapeColor = "red";

	target3Sprite = createSprite(500, 600, 20, 100);
	target3Sprite.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {restitution: 0, isStatic:true});
	World.add(world, ground);
	 
	target1body = Bodies.rectangle(width/2, 650, 200, 20, {isStatic: true});
	World.add(world, target1body);

	target2body = Bodies.rectangle(300, 610, 20, 100, {isStatic: true});
	World.add(world, target2body);

	target3body = Bodies.rectangle(500, 610, 20, 100, {isStatic: true});
	World.add(world, target3body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  target1Sprite.x = target1body.position.x
  target1Sprite.y = target1body.position.y

  target2Sprite.x = target2body.position.x
  target2Sprite.y = target2body.position.y

  target3Sprite.x = target3body.position.x
  target3Sprite.y = target3body.position.y
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.6, setStatic:false})
	World.add(world, packageBody);
  }
}