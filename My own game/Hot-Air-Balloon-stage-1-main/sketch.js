var bg, bgImg
var bottomGround
var topGround
var boy, boyImg
var ob1,ob2,ob3,z2,z1
var PLAY=1;
var END=0;
var gameState = PLAY;

function preload(){
bgImg = loadImage("assets/background.jpg");
boyImg = loadAnimation("assets/run1.png","assets/run2.png","assets/run3.png","assets/run4.png","assets/run5.png");
zImg=loadImage("assets/Big zombie.png");
zImg2=loadImage("assets/Zombie.png");
obImg2=loadImage("assets/cactus.png");
obImg3=loadImage("assets/obs.png");

gameOverImg=loadImage("assets/gameOver.png");
restartImg=loadImage("assets/restart.png");
}

function setup(){

  createCanvas(700,700)
//background image
bg = createSprite(185,355);
bg.addImage(bgImg);
bg.scale = 2

//creating top and bottom grounds
bottomGround = createSprite(200,678,800,20);
bottomGround.visible = false;

gameOver = createSprite(350,350,800,20);
gameOver.visible = false;

restart = createSprite(350,450,800,20);
restart.visible = false;

//creating boy     
boy = createSprite(100,600,20,200);
boy.addAnimation("boy",boyImg);
boy.scale = 0.3;

obstacleGroup = new Group();


}

function draw() {
  
  background("black");
if(gameState===PLAY){
  bg.velocityX=-5
  if(bg.x<100){
    bg.x=bg.width/2
     }
    obstacle()
  if(keyDown("space")&& boy.y>570){
          boy.velocityY=-15;
          }
  boy.velocityY=boy.velocityY+0.8
  boy.collide(bottomGround)

  if(obstacleGroup.isTouching(boy)){
    gameState=END
  }
}
else if(gameState===END){
bg.velocityX=0
gameOver.visible=true;
restart.visible=true;
obstacleGroup.setVelocityXEach(0);
boy.velocityX=0
boy.velocityY=0
}

        drawSprites();
        
}
function obstacle(){
  if(frameCount % 60===0){
    var obstacles =createSprite(600,600,10,40)
    obstacles.velocityX=-5
    obstacles.scale=0.5
    var rand=Math.round(random(1,4));
    switch (rand){
        case 1: obstacles.addImage("c2",obImg2);
        break;
        case 2: obstacles.addImage(obImg3);
        break;
        case 3: obstacles.addImage(zImg);
        break;
        case 4: obstacles.addImage(zImg2);
        break;
        default:break;
    }
    obstacleGroup.add(obstacles)
  }
}