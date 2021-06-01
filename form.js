class Form {
    constructor(){
    
     this.input=createInput("Name");
     this.button =createButton("Play");
     this.greeting = createElement("h3");
     this.title=createElement('h1');
     this.reset=createButton("Reset");

    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();
    }
display(){
  // h1 is used for heading
    
   this.title.html("CAR RACING GAME");
   this.title.position(displayWidth/2-50,30);

  // creating input box
   this.input.position(displayWidth/2+30,displayHeight/2-80);

  //creating button
 
   this.button.position(displayWidth/2+50,displayHeight/2);
   this.reset.position(displayHeight-100,20);

 //displaying hello+player name on click of play button
   this.button.mousePressed(()=>{
    //hiding input box and button
    console.log(this.input); 
      this.input.hide();
      this.button.hide();

     //getting the value from input box
     player.name = this.input.value();
     playerCount=playerCount+1;
     player.index=playerCount;
     player.updatePlayerInfo();   
     player.updateCount(playerCount);
     this.greeting.html("Hello "+ player.name);
     this.greeting.position(displayWidth/2-70,displayHeight/4);
  });
  
 this.reset.mousePressed(()=>{
   player.updateCount(0);
   Player.updateCarsAtEnd(0);
   game.updateState(0);
 })
}
    
}