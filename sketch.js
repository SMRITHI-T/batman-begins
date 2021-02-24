const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var engine;
var world;
var maxDrops=100;
var drops=[]
var batman;
var thunder;
var thunderCreatedFrame=0;

function preload(){
  batmanImg=loadImage("walking_1.png");
  thunder1=loadImage("1.png");
  thunder2=loadImage("2.png");
  thunder3=loadImage("3.png");
  thunder4=loadImage("4.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  if(frameCount%100===0){
  for(var i=0;i<maxDrops;i++){
    drops.push(new rainDrop(random(0,800),random(0,400)));
  }
}
var options={
  isStatic:true
}
batman=Bodies.circle(400,290,100,options);
World.add(world,batman);

}

function draw() {
  Engine.update(engine)
  background(0);  
  drawSprites();

  rand=Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,770),random(10,30),10,10);
    thunder.scale=random(0.3,0.7);
    switch(rand){
      case 1:thunder.addImage(thunder1);
      break;
      case 2: thunder.addImage(thunder2);
      break;
      case 3:thunder.addImage(thunder3);
      break;
      case 4:thunder.addImage(thunder4);
     default: break;
    
    }
  }
  if(thunderCreatedFrame+10===frameCount&&thunder){
thunder.destroy();
  }
  for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].newDrops();
  }
  imageMode(CENTER);
  image(batmanImg,batman.position.x,batman.position.y,250,250);
}