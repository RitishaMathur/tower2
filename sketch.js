const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var  slingShot;

function preload() {
    polygonImg = loadImage("polygon.png")  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    
    ground = new Ground(600,height,1200,20);
    pl1 = new Ground(680,300,450,20)
    box1 = new Box(526,265,50,50)
    box2 = new Box(577,265,50,50)
    box3 = new Box(628,265,50,50)
    box4 = new Box(679,265,50,50)
    box5 = new Box(730,265,50,50)
    box6 = new Box(781,265,50,50)
    box7 = new Box(832,265,50,50)
   
    box8 = new Box(577,215,50,50)
    box9 = new Box(628,215,50,50)
    box10 = new Box(679,215,50,50)
    box11 = new Box(730,215,50,50)
    box12 = new Box(781,215,50,50)
   
    box13 = new Box(628,165,50,50)
    box14 = new Box(679,165,50,50)
    box15 = new Box(730,165,50,50)
   
    box16 = new Box(679,115,50,50)

    poly = new Polygon(200,200)
    sling = new Slingshot(poly.body,{x:200,y:180})
   
    //slingshot = new Slingshot(bird.body,{x:200,y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    pl1.display();
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
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    poly.display();
    sling.display();
    //slingshot.display();    
}
function mouseDragged(){
Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(poly.body)
    }
}
