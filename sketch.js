var iss;
var issimg;
var astronaut;
var sleep;
var brush;
var gym1;
var gym2;
var eat;
var drink;
var move;
var bath;

function preload()
{

  issimg=loadImage("iss.png");
  sleep=loadImage("sleep.png");
  brush=loadImage("brush.png");
  gym1=loadAnimation("gym1.png","gym2.png");
  gym2=loadAnimation("gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadImage("move.png");
  bath=loadAnimation("bath1.png","bath2.png");

}

function setup() 
{

  createCanvas(1365,665);

  iss = createSprite(700,400);
  iss.addImage("background",issimg);
  iss.scale=0.28;

  astronaut = createSprite(702,300);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale=0.2;
  
}

function draw() 
{

  background("black");

  astronaut.setCollider("rectangle",0,0,1900,2100);
  
  if(keyDown("UP_ARROW"))
    {

        astronaut.addImage("brushing",brush);
        astronaut.changeImage("brushing");
        astronaut.y=350;
        astronaut.x=702;
        astronaut.velocityX=0;
        astronaut.velocityY=0;

    }

  if(keyDown("DOWN_ARROW"))
    {

        astronaut.addAnimation("gymming1",gym1);
        astronaut.changeAnimation("gymming1");
        astronaut.y=450;
        astronaut.x=702;
        astronaut.velocityX=0;
        astronaut.velocityY=0;

    }

  if(keyDown("G"))
    {

        astronaut.addAnimation("gymming2",gym2);
        astronaut.changeAnimation("gymming2");
        astronaut.y=450;
        astronaut.x=702;
        astronaut.velocityX=0;
        astronaut.velocityY=0;

    }

  if(keyDown("LEFT_ARROW"))
    {

        astronaut.addAnimation("eating",eat);
        astronaut.changeAnimation("eating");
        astronaut.y=400;
        astronaut.x=702;
        astronaut.velocityX=0;
        astronaut.velocityY=0;

    }

  if(keyDown("D"))
    {

        astronaut.addAnimation("drinking",drink);
        astronaut.changeAnimation("drinking");
        astronaut.y=400;
        astronaut.x=702;
        astronaut.velocityX=0;
        astronaut.velocityY=0;

    }

  if(keyDown("RIGHT_ARROW"))
    {

        astronaut.addAnimation("bathing",bath);
        astronaut.changeAnimation("bathing");
        astronaut.y=400;
        astronaut.x=702;
        astronaut.velocityX=0;
        astronaut.velocityY=0;

    }

  if(keyDown("M"))
    {

        astronaut.addImage("moving",move);
        astronaut.changeImage("moving");
        astronaut.velocityX=-2;
        astronaut.velocityY=2;

    }

  edges= createEdgeSprites();
  astronaut.bounceOff(edges);

  drawSprites();

    fill("white");
    textSize(20);
    text("INSTRUCTIONS:",20,40);
    textSize(10);
    text("UP       ARROW     : BRUSHING",20,60);
    text("DOWN ARROW    : GYMMING1",20,75);
    text("LEFT    ARROW    : EATING",20,90);
    text("RIGHT ARROW    : BATHING",20,105);
    text("M         KEY           : MOVING",20,120);
    text("G         KEY           : GYMMING2",20,135);
    text("D         KEY           : DRINKING",20,150);

}