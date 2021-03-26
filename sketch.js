var cat,mouse;
var bgImg,catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;

function preload() {
   //load the images here
   bgImg = loadImage("images/garden.png");
   catImg1 = loadAnimation("images/cat1.png");
   catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
   catImg3 = loadAnimation("images/cat4.png");
   mouseImg1 = loadAnimation("images/mouse1.png");
   mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
  createCanvas(1000,600);
    //create tom and jerry sprites here
    
    cat = createSprite(800,500);
    cat.addAnimation("catImage",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,450);
    mouse.addAnimation("mouseImage",mouseImg1);
    mouse.scale = 0.2;
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2 && 
      mouse.x - cat.x < mouse.width/2 + cat.width/2 &&
      cat.y - mouse.y < mouse.width/2 + cat.width/2 && 
      mouse.y - cat.y < mouse.width/2 + cat.width/2){

      cat.velocityX = 0;
      cat.addAnimation("catRunning",catImg3);
      cat.changeAnimation("catRunning");

      mouse.velocityX = 0;
      mouse.addAnimation("mouseRunning",mouseImg3);
      mouse.changeAnimation("mouseRunning");

    } else {

      cat.addAnimation(catImg1);
      mouse.addAnimation(mouseImg1);
      
    }
    
    console.log(cat.x - mouse.x);

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
     mouse.velocityX = 2;
  }

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("catTeasing",catImg2);
    cat.changeAnimation("catTeasing");
    cat.frameDelay = 25;
    cat.velocityX = -2;
 }

}
