var player,game,form;

function peload(){

}

function setup() {
  createCanvas(5000,500);

  ground = createSprite(width/2, height, width, 20);
  ground.shapeColor = "black";

  ob1 = createSprite(1100, height-45, 300, 70);
  ob1.shapeColor = "black";
  ob2 = createSprite(1350, height-95, 15, 130);
  ob2.shapeColor = "black";
  ob3 = createSprite(1600, height-45, 300, 70);
  ob3.shapeColor = "black";
  ob4 = createSprite(500, 200, 50, 50);
  ob4.shapeColor = "black";
  ob5 = createSprite(600, 200, 50, 50);
  ob5.shapeColor = "black";
  ob6 = createSprite(700, 200, 50, 50);
  ob6.shapeColor = "black";
  ob7 = createSprite(800, 200, 50, 50);
  ob7.shapeColor = "black";
  ob8 = createSprite(900, 200, 50, 50);
  ob8.shapeColor = "black";
  ob9 = createSprite(1000, 200, 50, 50);
  ob9.shapeColor = "black";
  ob10 = createSprite(1100, 200, 50, 50);
  ob10.shapeColor = "black";
  ob11 = createSprite(1200, 200, 50, 50);
  ob11.shapeColor = "black";
  ob12 = createSprite(1300, 200, 50, 50);
  ob12.shapeColor = "black";
  ob13 = createSprite(1400, 200, 50, 50);
  ob13.shapeColor = "black";


}

function draw() {
  background("gray");  
  fill("blue");
  textSize(20);
  text(mouseX+ " , " +mouseY,mouseX,50);

  drawSprites();
}