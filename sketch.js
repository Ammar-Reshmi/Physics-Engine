const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
var balloption={
    "restitution":1
}
   ball=Bodies.circle(200,200,30,balloption)
   World.add(world,ball)


    console.log(object);
}

function draw(){

    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,30,30)
}
