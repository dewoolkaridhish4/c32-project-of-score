const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var score=0;

function preload(){
  ballImg=loadImage("Sprites/Ball.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(417,280,250,10);
  //1st layer
  box1=new Box(375,250,30,45);
  box2=new Box(400,250,30,45);
  box3=new Box(425,250,30,45);
  box4=new Box(450,250,30,45);
  //2nd layer
  box5=new Box(382,206,30,45);
  box6=new Box(407,206,30,45);
  box7=new Box(432,206,30,45);
  //3rd layer
  box8=new Box(394,176,30,45);
  box9=new Box(419,176,30,45);
  box10=new Box(403,132,30,45);

  Engine.run(engine);

  var ballOptions={
    'restitution':0.02,
    'friction':0.5,
    'density':1.2
  }
  ball=Bodies.circle(200,200,40,ballOptions);
  World.add(world,ball); 
  
  slingshot=new Slingshot(this.ball,{x:100,y:200});

}

function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);

  fill("black");
  text("y:"+mouseY,50,75);
  text("x:"+mouseX,50,50);

  noStroke();
  textSize(35)
  fill("white")
  text("Score: "+score,573,46);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();

  imageMode(CENTER);
  image(ballImg,ball.position.x,ball.position.y,50,40);

  slingshot.display();

  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.ball);
  }
}