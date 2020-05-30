
function preload(){
  groundImage= loadImage("mars2.jpeg");
  playerImage= loadImage("player.png");
  cometImage=loadImage("comet2.png");
  roverImage=loadImage("rover.png");
  blockImage=loadImage("blocks.jpg")
}
function setup() {
canvas= createCanvas(displayWidth-30,displayHeight-70);
  ground= createSprite(displayWidth/2,displayHeight/2,displayWidth*3,displayHeight*4);
  ground.addImage("ground",groundImage);
  ground.scale=3;
  player= createSprite(displayWidth/6,displayHeight/2);
  player.addImage("player",playerImage);
  invisibleground =createSprite(displayWidth/2,displayHeight-130,displayWidth,50);
  invisibleground.visible=false;
  upButton= createButton('↑');
  downButton= createButton(' ↓ ');
  upButton.position(50,displayHeight/2+100);
  downButton.position(50,displayHeight/2+170);
  ground.velocityX=-6;
   roverGroup=createGroup();
   cometGroup=createGroup();
   blocksGroup=createGroup();
}

function draw() {
  background(groundImage);
  //if(keyIsDown(UP_ARROW)){
   // player.velocityY=-12;
  //}
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  upButton.mousePressed(()=>{
    player.velocityY=-15
  })
  downButton.mousePressed(()=>{
    player.velocityY=15
  })
  player.velocityY+=1;
  console.log(player.velocityY);
  player.collide(invisibleground);
spawnobsticles();
spawnblocks();
  drawSprites();
}
function spawnobsticles(){
  if(World.frameCount%160===0){
    var r= Math.round(random(100,displayHeight-500))
    comet=createSprite(displayWidth,r);
    comet.addImage(cometImage);
    comet.velocityX=-(Math.round(random(6,12)));
    comet.velocityY=Math.round(random(2,6));
    comet.scale=0.5;
    comet.lifetime=displayWidth/6;
    cometGroup.add(comet);
  }
 // var r1=Math.round(random(120,200));
if(World.frameCount%180===0){
  rover=createSprite(displayWidth,displayHeight-200);
  rover.addImage(roverImage);
  rover.scale=0.5;
  rover.velocityX=-5;
  rover.lifetime=displayWidth/6;
  roverGroup.add(rover);
}
}
function spawnblocks(){
  
if(World.frameCount%200===0){
  var rand2=Math.round(random(100,displayHeight-200))
  block1=createSprite(displayWidth,rand2,200,30);
  block1.velocityX=-5;
  block2=createSprite(displayWidth,rand2,100,40);
  block2.velocityX=2;
 // block1.addImage(blockImage);
 // block2.addImage(blockImage);
block1.lifetime=displayWidth/6;
block2.lifetime=displayWidth/6;

var rand = Math.round(random(block1,block2));
}
}
