var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var count = 0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text(150,20,height-divisionHeight/2-100);
 text(200,100,height-divisionHeight/2-100);
 text(350,180,height-divisionHeight/2-100);
 text(400,260,height-divisionHeight/2-100);
 text(500,340,height-divisionHeight/2-100);
 text(450,420,height-divisionHeight/2-100);
 text(300,500,height-divisionHeight/2-100);
 text(250,580,height-divisionHeight/2-100);
 text(100,660,height-divisionHeight/2-100);
 text(50,740,height-divisionHeight/2-100);

  Engine.update(engine);
 
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
   }
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
  }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!==undefined)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
       if(particle.body.position.x < 80)
       {
         score=score+150;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
        else if(particle.body.position.x > 81 && particle.body.position.x < 160)
       {
         score=score+200;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 161 && particle.body.position.x < 240)
       {
         score=score+350;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 241 && particle.body.position.x < 320)
       {
         score=score+400;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 321 && particle.body.position.x < 400)
       {
         score=score+500;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 401 && particle.body.position.x < 480)
       {
         score=score+450;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 481 && particle.body.position.x < 560)
       {
         score=score+300;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 561 && particle.body.position.x < 640)
       {
         score=score+250;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 641 && particle.body.position.x < 720)
       {
         score=score+100;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
       else if(particle.body.position.x > 721 && particle.body.position.x < 800)
       {
         score=score+50;
         particle=undefined;
         if( count>= 5) gameState = "end";
       }
     }
   }
   if(gameState === "end"){
     textSize(30);
     text("Game Over", 400, 400);
   }
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
      particle=new Particle(mouseX, 10, 10);
      console.log(particle);
      particle.y = 10;
  }
}