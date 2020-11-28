var fixedrect, movingrect, rect1,rect2,extra1,extra2
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(100,150,50,100)
  movingrect=createSprite(100,130,50,100)
  rect1=createSprite(300,100,50,100)
  rect2=createSprite(500,100,50,100)
  extra1=createSprite(400,100,50,100)
extra2=createSprite(200,300,50,100)
  fixedrect.shapeColor="white";
  movingrect.shapeColor="red";
  rect1.shapeColor="yellow";
  rect2.shapeColor="green";
  extra1.shapeColor="red";
  extra2.shapeColor="red";
  fixedrect.debug=true;
  movingrect.debug=true;
  rect1.debug=true;
  rect2.debug=true;
rect1.velocityX=2;
rect2.velocityX=-2;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  movingrect.x=mouseX;
  movingrect.y=mouseY;
 if(isTouching(extra2,movingrect)){
  extra2.shapeColor="pink";
  movingrect.shapeColor="blue";
 }
 else{
  extra2.shapeColor="red";
  movingrect.shapeColor="white";
 }
 bounceOff(rect1,rect2); 
}
