const Eng = Matter.Engine;
const MW = Matter.World;
const MB = Matter.Bodies;

var MyEngine, MyWorld;

var anyBody;

function setup(){
    var canvas = createCanvas(600,400);
    MyEngine = Eng.create();
    world = MyEngine.world;

    anyBody = MB.rectangle(300,200,20,20);
    MW.add(world, anyBody);
    console.log(anyBody)
}

function draw(){
    background(0);
    Eng.update(MyEngine);

    rect(anyBody.position.x, anyBody.position.y, 20, 20);

   
}