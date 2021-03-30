


function preload (){
backgroundImage = loadImage("bg.png")
playerImage = loadImage("vvs.png")


}
function setup() {
  createCanvas(1500, 800);
  ground = createSprite(750,750,1500,20)

  player = createSprite(50,680,10,50)
  //player.addImage(playerImage)
  //player.scale = 0.5
}

function draw() {
  background(backgroundImage);
if (ground.x<0){
ground.x = ground.width/2

}
if (keyDown('up')){
player.velocityY = -12

}
player.velocityY = player.velocityY+0.5

if (keyDown('left')){
player.x = player.x-2


}
if (keyDown('right')){
player.x = player.x+2

}

virus()
textSize(20)
stroke('black')
strokeWeight(8)


text("Score: ",1300,50)
drawSprites()
}

function virus(){
if (frameCount%60===0){
Virus = createSprite(1500,680,10,50)
Virus.velocityX = -3

}
}
 
