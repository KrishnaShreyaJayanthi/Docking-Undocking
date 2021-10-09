var img1, img2, img3, img4, img5, img6;
var iss;
var spacecraft;
var hasDocked = false;

function preload(){
  img1=loadImage('iss.png');
  img2=loadImage('spacebg.jpg');
  img3=loadImage('spacecraft1.png');
  img4=loadImage('spacecraft2.png');
  img5=loadImage('spacecraft3.png');
  img6=loadImage('spacecraft4.png');
}
function setup() {
  createCanvas(600,350);
  iss=createSprite(330, 130);
  iss.addImage(img1);
  iss.scale=0.5;

  spacecraft = createSprite(285, 240, 50, 50);
  spacecraft.addImage(img3);
  spacecraft.scale=0.15;
  
}

function draw() {
  background(img2);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(img5);
    spacecraft.x=spacecraft.x-1;
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(img6);
    spacecraft.x=spacecraft.x+1;
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(img4);
  }
  if(keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-4;
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill('white');
    text('Docking Successful', 200,300)
  }
  drawSprites();
}