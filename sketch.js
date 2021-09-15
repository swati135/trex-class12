var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudImage





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,5);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(125);

 
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  //trex.collide(ground);

  //spawning of clouds
  spawnClouds();

  

  drawSprites();
  
}

function spawnClouds(){

  if(frameCount % 60 === 0){
      var cloud = createSprite(610,130, 10,10);
      cloud.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX=-4  ;
      //console.log(frameCount);

      cloud.y = Math.round(random(80,130));
      cloud.depth = trex.depth;
      trex.depth +=1

     
  }
 
}

