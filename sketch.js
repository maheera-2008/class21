var fixedRect,movingRect,bouncingRect1,bouncingRect2,bouncingRect3,bouncingRect4;

function setup() {
  createCanvas(1200,1200);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  bouncingRect1=createSprite(100,100,50,50);
  bouncingRect2=createSprite(600,100,50,50);
  bouncingRect3=createSprite(900,100,50,50);
  bouncingRect4=createSprite(900,700,50,50);
  bouncingRect1.velocityX=5;
  bouncingRect2.velocityX=-5;
  bouncingRect3.velocityY=5;
  bouncingRect4.velocityY=-5;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  bouncingRect1.shapeColor="pink";
  bouncingRect2.shapeColor="pink";
  fixedRect.debug=true;
  movingRect.debug=true; 
}

function draw() {
  background(0,0,0);  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  
  bounce(bouncingRect1,bouncingRect2);
  bounce(bouncingRect3,bouncingRect4);
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="purple";
    movingRect.shapeColor="purple";  
  }
  drawSprites();
}
