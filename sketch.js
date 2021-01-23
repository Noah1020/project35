const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 

  var testplayer;
  var tree1;

function preload(){

}


function setup() {

  createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;


  testplayer = new Player(200,200);
  tree1 = new Tree(500,700,5000,50);



}
function draw() {
  background(55);
  Engine.update(engine);

///
  tree1.display();
  testplayer.display();

 


  drawSprites();



}