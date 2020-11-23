const engine = Matter.Engine
const world = Matter.World
const constraint = Matter.Constraint
const bodies = Matter.Bodies

var building;
var ground;


function setup() {
  createCanvas(1250,600);
  myEngine = engine.create();
  myWorld = myEngine.world;
  options ={
    isStatic: true
  }

  ground  = bodies.rectangle(625,550,2000,20,options);
  world.add(myWorld,ground);
  
  box1 = new Box(800,300,50,50);
  box2 = new Box(800,350,50,50);
  box3 = new Box(750,300,50,50);
  box4 = new Box(750,350,50,50);
  box5 = new Box(775,250,50,50);

  ball1 = new Ball(600,500,30);
  rope1 = new Rope(ball1.ball,{x: 600,y:250})
 
}
function draw() {
  engine.update(myEngine)
  background("Orange"); 
  
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();

   ball1.display();
   rope1.display()
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,2000,20);
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.ball,{x:mouseX,y:mouseY})
  //Matter.Body.setVelocity(ball1.ball,1)
  Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:20,y:30})
}