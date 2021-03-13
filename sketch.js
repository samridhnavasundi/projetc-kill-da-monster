const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImage


function preload() {
//preload the images here
backgroundImage=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(1500,780,3000,20);
    man=new Man(100,100,150,150)
    monster=new Monster(2050,150,150,150)
    monster2=new Monster(1800,100,150,150)
    slingshot=new SlingShot(man.body,{x:150,y:400})
    box1=new Box(1000,750,70,70);
    box2=new Box(1000,700,70,70);
    box3=new Box(1000,650,70,70);
    box4=new Box(1000,600,70,70);
    box5=new Box(1000,550,70,70);
    box6=new Box(1000,500,70,70);
    box7=new Box(1000,450,70,70);
    box8=new Box(1000,400,70,70);
    box9=new Box(1000,350,70,70);
    box10=new Box(1000,300,70,70);
    box11=new Box(1070,750,70,70);
    box12=new Box(1070,700,70,70);
    box13=new Box(1070,650,70,70);
    box14=new Box(1070,600,70,70);
    box15=new Box(1070,550,70,70);
    box16=new Box(1070,500,70,70);
    box17=new Box(1070,450,70,70);
    box18=new Box(1070,400,70,70);
    box19=new Box(1070,350,70,70);
    box20=new Box(1070,300,70,70);
    box21=new Box(1070,250,70,70);
    

}

function draw() {
  background(255);
  image(backgroundImage,1050,400,3000,800)
  Engine.update(engine);
  ground.display();
  man.display();
  slingshot.display();
  monster.display();
  monster2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();


}
function mouseDragged(){
  Matter.Body.setPosition(man.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}