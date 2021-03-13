const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(30)
  fill("red");
  text("Score : "+score,20,40);
  fill("yellow");
  
  textSize(30)
  text(" 500 ", 9, 550);
  text(" 500 ", 89, 550);
  text(" 500 ", 169, 550);
  text(" 500 ", 249, 550);
  text(" 100 ", 329, 550);
  text(" 100 ", 409, 550);
  text(" 100 ", 489, 550);
  text(" 200 ", 569, 550);
  text(" 200 ", 649, 550);
  text(" 200 ", 729, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(55);
    fill(0,255,255);
    text("GameOver", 250, 240);

  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  if(particle!=null)
  {
  particle.display();
        
  if (particle.body.position.y>760)
  {
  if (particle.body.position.x < 300) 
  {
    score=score+500;      
    particle=null;
  if ( count>= 5) gameState ="end";                          
    }


  else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
  {
    score = score + 100;
    particle=null;
  if ( count>= 5) gameState ="end";

  }
  else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
  {
    score = score + 200;
    particle=null;
    if ( count>= 5)  gameState ="end";

  }                  
  }
  }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}