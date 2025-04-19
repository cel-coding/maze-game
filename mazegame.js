var sofiya =createSprite(300,30,15,15);
sofiya.shapeColor="yellow";

//sofiya.velocityY = 2;
//sofiya.velocityX = 3;

var eye1 =createSprite(125,135,30,30);
eye1.shapeColor="red";

var eye2 =createSprite(225,135,30,30);
eye2.shapeColor="red";

var lip12=createSprite(175,200,150,25);
lip12.shapeColor="red";

var wall13=createSprite(3,1,15,800);
wall13.shapeColor="red";


var wall14=createSprite(50,20,50,15);
wall14.shapeColor="darkred";

var wall15=createSprite(110,30,15,60);
wall15.shapeColor="darkred";

var wall16=createSprite(75,52,15,80);
wall16.shapeColor="darkred";

var wall17=createSprite(142,85,150,15);
wall17.shapeColor="darkred";

var wall18 = createSprite(180,30,100,15);
wall18.shapeColor="darkred";

var wall19=createSprite(265,40,15,80);
wall19.shapeColor="darkred";

var wall20=createSprite(298,80,80,15);
wall20.shapeColor="darkred";

var wall21=createSprite(363,110,15,150);
wall21.shapeColor="darkred";

var wall22=createSprite(293,121,50,15);
wall22.shapeColor="darkred";

var wall23=createSprite(310,150,15,50);
wall23.shapeColor="darkred";

var wall24=createSprite(186,395,800,15);
wall24.shapeColor="red";

var wall25= createSprite(398,370,13,800);
wall25.shapeColor="red";

var wall26= createSprite(130,289,200,15);
wall26.shapeColor="darkred";

var wall27 = createSprite(300,289,100,15);
wall27.shapeColor="darkred";

var wall28= createSprite(290,320,200,15);
wall28.shapeColor="darkred";

var wall29= createSprite(200,350,300,15);
wall29.shapeColor="darkred";

var cup= createSprite(384,358,15,60);
cup.shapeColor="yellow";

var wall31 =createSprite(50,85,80,15);
wall31.shapeColor="darkred";

var wall32 = createSprite(335,220,10.5);
wall32.shapeColor="darkred";

var wall33 = createSprite(50,120,80,15);
wall33.shapeColor="darkred";

var wall34 = createSprite(50,180,15,120);
wall34.shapeColor="darkred";

var wall35 = createSprite(230,243,200,15);
wall35.shapeColor="darkred";

var wall36 =createSprite(209,1,400,15);
wall36.shapeColor="red";

function draw() {
   background("orange");
    fill("red");
  textFont("Georgia");
  text("SOFIA",315,40);
  text("cup",345,380);
  
  
if(sofiya.isTouching(wall13)||sofiya.isTouching(wall14)||sofiya.isTouching(wall15)||sofiya.isTouching(wall16)||sofiya.isTouching(wall17)||sofiya.isTouching(wall18)||sofiya.isTouching(wall19)||sofiya.isTouching(wall20)||sofiya.isTouching(wall34)||sofiya.isTouching(wall35)||sofiya.isTouching(wall21)||sofiya.isTouching(wall22)||sofiya.isTouching(wall23)||sofiya.isTouching(wall24)||sofiya.isTouching(wall25)||sofiya.isTouching(wall26)||sofiya.isTouching(wall27)||sofiya.isTouching(wall28)||sofiya.isTouching(wall29)||sofiya.isTouching(wall31)||sofiya.isTouching(wall32)||sofiya.isTouching(wall33)){
   sofiya.x=305;
   sofiya.y=40;
}

   
  if(keyDown(UP_ARROW)){
    sofiya.velocityY =-2;
    sofiya.velocityX = 0;
    
  } 
   
   if(keyDown(DOWN_ARROW)){
     sofiya.velocityX = 0;
     sofiya.velocityY = 2;
     
   }
   
   if(keyDown(RIGHT_ARROW)){
     sofiya.velocityX = 2;
     sofiya.velocityY = 0;
     
     
   }
   
   if(keyDown(LEFT_ARROW)){
     sofiya.velocityX = -2;
     sofiya.velocityY = 0;
     
     
     
   }
   if(sofiya.isTouching(cup)){
     textSize(20);
     text("YOU WIN",170,170);
     sofiya.setVelocity(0,0);
     
   }
   
   
 createEdgeSprites();
  sofiya.bounceOff(edges);
  

  
  
  drawSprites();
  
}
