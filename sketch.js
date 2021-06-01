var form,game;
var db;
var playerCount;
var player;
var gameState=0;
var allPlayers;
var cars,car1,car2,car3,car4;
var carImg1,carImg2,carImg3,carImg4,trackImg;
var ground;


function preload(){
  carImg1=loadImage("car1.png");
  carImg2=loadImage("car2.png");
  carImg3=loadImage("car3.png");
  carImg4=loadImage("car4.png");
  trackImg=loadImage("track.jpg");
  ground=loadImage("ground.png");
}

  

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    db=firebase.database();
  
    game=new Game();
    game.getState();
    game.start();
    

    
}

function draw(){
  if(playerCount===4) {
      game.updateState(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }   
}


  
