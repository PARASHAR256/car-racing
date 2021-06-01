class Player {
    constructor(){
      this.index=null;
      this.distance=0;
      this.name=null;
      this.rank=null;
    }
   //creating a function to get player count
    getCount(){
            var playerCountRef  = db.ref('playerCount');
           //.on is used to read the data from database
            playerCountRef.on("value",function(data){
                playerCount=data.val();
            });
    }
   //creating a function to update a player count
    updateCount(count){
      //   (/) is usef for root node
        db.ref('/').update({
            playerCount:count
        });
        
    }
    updatePlayerInfo(){
        var playerIndex="players/player"+this.index;
        db.ref(playerIndex).set({
            name:this.name,
            distance:this.distance

        })
    }
     static getPlayerInfo(){
         var playerInfo=db.ref('players');
         playerInfo.on("value",(data)=>{
             allPlayers=data.val();
             
         })

        
    }
      getCarsAtEnd (){
          db.ref('carsAtEnd').on("value",(data)=>{
          this.rank=data.val();
          })
      }
      static updateCarsAtEnd (rank){
          db.ref("/").update({
              'carsAtEnd':rank
          })
      }
}