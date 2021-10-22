const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var wall1;
var wall2;
var bridge;
var jointPoint;
var stones=[];
var breakButton;


function preload (){
 //zombie = loadImage("./assets/zombie.png")
 //zombie2 = loadImage("./assets/zombie2.png")
 //zombie3 = loadImage("./assets/zombie3.png")
 //zombie4 = loadImage("./assets/zombie4.png")
 //backgroundImage = loadImage("./assets/background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground=new Base(10,600,2550,10);
  wall1=new Base(50,400,150,100);
  wall2=new Base(1230,400,150,100);
  bridge = new Bridge(100,200,100,50);
  jointPoint = new Base(100,200,100,50);

  zombie = createSprite(width / 2, height - 110);
  zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
  zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
  zombie.scale= 0.1;
  zombie.velocityX= 10;

 // breakButton=createButton("");
 //breakButton.position( width - 200, height / 2 - 50);
 //breakbutton.class("breakbutton");
 //breakButton.mousePressed(handleButtonPress);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
  

  
}

function draw() {
  background(51);
  image(backgroundImg,width/2,height/2,windowWidth,windowHeight);
  Engine.update(engine);

  
  ground.display();
  wall1.display();
  wall2.display();

for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 + 300);
  var y = random(-10, 140);
  var stone=new Stone(x, y, 80, 80);
  stones.push(stone);
 }

}
