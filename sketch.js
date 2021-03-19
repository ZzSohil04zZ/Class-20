var fixRect,movingRect;

function setup() {
  createCanvas(800,400);
 //createSprite(400, 200, 50, 50);

 fixedRect = createSprite(300,200,100,100)
 fixedRect.shapeColor = "red"
 fixedRect.debug = true

 movingRect = createSprite(600,200,100,50)
 movingRect.shapeColor = "green"
 movingRect.debug = true
}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX
  movingRect.y = mouseY 

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2&&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2&&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2

    ){
    movingRect.shapeColor = "orange"
    fixedRect.shapeColor = "yellow"
  }

  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "red"

  }


  drawSprites();



}