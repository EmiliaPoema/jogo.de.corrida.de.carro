class Player {
  constructor (){
    this.name = null; this.index = null; this.positionX = 0; this.positionY = 0;
  }


getCount(){
  // leia os dados e armazene o valor de playerCount
  var playerCountRef = database.ref("playerCount");
  playerCountRef.on("value",
  data => { playerCount = data.val();
  });

  
}

updateCount (count){
  // atualize o playerCount
  database.ref("/").update({
    playerCount: count });
}
addPlayer(){
  var playerIndex = "players/player" + this.index;
  
  if (this.index === 1) { this.positionX = width / 2 - 100; } else { this.positionX = width / 2 + 100; }
  
  database.ref(playerIndex).set({
  name: this.name,
  positionX: this.positionX, positionY: this.positionY, 
  //rank: this.rank,
  //score: this.score
 });
}
getDistance(){
  var playerDistanceRef = database.ref('players/player'+ this.index);
   playerDistanceRef.on("value",(data)=>{ var data = data.val();
  this.positionX = data.positionX; 
  this.positionY = data.positionY; })
}


update(){
  var playerIndex = 'players/player' + this.index;
database.ref(playerIndex).update({
positionX: this.positionX, positionY: this.positionY, 
//rank: this.rank,
 //score: this.score,
 //life : this.life
});
}

static getPlayersInfo(){
  var playerInfoRef = database.ref("players");
  playerInfoRef.on("value",
  data => { allPlayers = data.val();
  });
}
}