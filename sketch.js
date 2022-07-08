var BackGround,backGround;
var playerStop, PlayerStop;
var player,playerRun;
var playerJump, Jump;
var SuperJump, SJump;
var SuperSpeed, SSpeed;
var PlayerDown, Down;
var money, Money;
var obstacle1,obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstaclesGroup;

function preload(){
  BackGround=loadImage("BackGround.jpeg");

  player=loadAnimation("playerRun1.jpeg","Run2.jpeg","Run3.jpeg");
  playerStop = loadImage("player.jpeg");
  playerJump = loadImage("Jump.jpeg");
  playerDown = loadImage("down.jpeg");

  money = loadImage("Money.jpeg");
  SuperJump = loadImage("SuperJump.jpeg");
  SuperSpeed = loadImage("SuperSpeed.jpeg");

  obstacle1 = loadImage("obstacle1.jpeg");
  obstacle2 = loadImage("obstacle2.jpeg");
  obstacle3 = loadImage("grandMother.jpeg");
  obstacle4 = loadImage("stroller.jpeg");
  obstacle5 = loadImage("badBird.jpeg");
  obstacle6 = loadImage("bomb.jpeg");

}

function setup(){
  createCanvas(950,950)
  backGround = createSprite(400,200);
  backGround.addImage(BackGround);
  backGround.velocityX=-2;
  
  playerRun = createSprite(150,630);
  playerRun.addAnimation("Run",player);
  
  obstaclesGroup = new Group();
}


function draw(){

  if(backGround.x < 0){
    backGround.x = width/4;
  }

  if(keyDown("UP_ARROW")){
    playerRun.velocityY = -5
  }
  spawnObstacles();
  drawSprites();
}

function spawnObstacles (){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,665,10,40);
    obstacle.velocityX = -6 // + score/100;

    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              obstacle.scale = 0.5
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              obstacle.scale = 0.07
              break;
      case 4: obstacle.addImage(obstacle4);
              obstacle.scale = 0.07
              break;
      case 5: obstacle.addImage(obstacle5);
              obstacle.scale = 0.07
              break;
      case 6: obstacle.addImage(obstacle6);
              obstacle.scale = 0.07
              break;
      default: break;
    }
    //obstacle.scale = 0.07;
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}