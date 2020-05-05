var movingRect,fixedRect;

  function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 10, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=4;
  movingRect = createSprite(200,390,80,50);
  movingRect.shapeColor="green";
  movingRect.velocityY=-4;
  ob1 = createSprite(300,300,50,30);
  ob1.shapeColor="yellow";
  ob2 = createSprite(300,300,50,30);
  ob2.shapeColor="blue";
}

function draw() {
  background(0);  

   ob1.x=World.mouseX;
   ob1.y=World.mouseY;
   
if(isTouching(ob1,ob2)){
   ob1.shapeColor="red";
   ob2.shapeColor="red";

}else{
  ob1.shapeColor="yellow";
  ob2.shapeColor="blue";

}


   bounceOff(movingRect,fixedRect);
  drawSprites();
}





