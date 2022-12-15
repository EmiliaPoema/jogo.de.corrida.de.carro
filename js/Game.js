class Game {
  constructor() {}

  getState(){
var gameStateRef = database.ref ("gameState");
gameStateRef.on("value", function(data){
    gameState = data.val();

});

  }

  update(state){
    database.ref ("/").update({
        gameState: state
    });
  }

  start() {
    
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite (width/2 - 50, height - 100);
    car1.addImage("car1",car1_img);
    car1.scale = 0.07;

    car2 = createSprite (width/2 + 100, height - 100);
    car2.addImage("car2",car2_img);
    car2.scale = 0.07;

    cars = [car1,car2];

fuels=new Group();
powerCoins=new Group();

this.addSprites(fuels,4,fuelImage,0.02);
this.addSprites(powerCoins,18,powerCoinImage,0.02);

  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play () {
Player.getPlayersInfo()
   this.handleElements();
if(allPlayers !== undefined){
image(track,0,-height*5,width,height*6);

var index=0;
for(var plr in allPlayers){
index=index+1;
var x=allPlayers[plr].positionX;
var y=height-allPlayers[plr].positionY;


cars[index-1].position.x=x;
cars[index-1].position.y=y;

if (index===player.index){
stroke(10);
fill("orange");
ellipse(x,y,60,60);
this.handleFuel(index);
this.handlePowerCoins(index);

camera.position.x= cars[index -1].position.x;
camera.position.y= cars[index -1].position.y;
}
}
if(keyIsDown(UP_ARROW)){ player.positionY +=10; player.update();


} 
    drawSprites();

}
 
}
addSprites(spriteGroup,numberOfSprites,spriteImage,scale){
  for (var i = 0; i < numberOfSprites; i++) {
   var x, y;
   x = random(width / 2 + 150, width / 2 - 150);
    y = random(-height * 4.5,height - 400);
  var sprite = createSprite(x, y);
   sprite.addImage("sprite", spriteImage);
    sprite.scale = scale;
    spriteGroup.add(sprite);
}}
handleFuel(index){
  cars[index - 1].overlap(fuels, function (collector, collected) 
  { player.fuel = 185; collected.remove();
   });
    if (player.fuel> 0 && this.playerMoving) 
    { player.fuel-= 0.3;
      }
      if (player.fuel<= 0) { gameState = 2; this.gameOver(); }
}
handlePowerCoins(index){
  cars[index - 1].overlap(powerCoins, function (collector, collected) 
  { player.score+= 21; player.update();
    collected.remove();
    });
    
}
}

